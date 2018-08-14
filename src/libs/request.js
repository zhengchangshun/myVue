import axios from 'axios'
import {Message} from 'element-ui'
import {EnumErrorCode} from './enums'
import utils from './utils'

axios.interceptors.response.use((res) => {
    return res
}, (error) => {
    let message = (error.response.data && error.response.data.message) || error.message
    Message.error(message)
    return Promise.reject(error)
})


export const request = (url, options = {}, method = 'get') => {
    let key = ~['delete', 'get', 'head'].indexOf(method.toLowerCase()) ? 'params' : 'data'
    // 过滤空的筛选条件
    if (['get'].indexOf(method.toLowerCase()) > -1) {
        options = Object.assign({}, options)
        for (let key in options) {
            if (options.hasOwnProperty(key)) {
                if (options[key] === '') {
                    delete options[key]
                }
            }
        }
    }

    //全局的默认过滤器
    return axios(Object.assign({'url': url, 'method': method}, {[key]: options}))
        .then(res => {
            //axios对response进行了一层封装，实际后端返回的响应在res.data中
            if (res.data.code === 0) {
                return res.data
            } else {
                console.error('api error result', res)
                Message.error(res.data.message)
                if (res.data.code === EnumErrorCode.NotFound) {
                    utils.to404()
                }
                /**
                 *   错误码处理
                 */
                return Promise.reject(res.data)
            }
        })
}

export const requestGet = (url, options = {}) => {
    return request(url, options, 'get')
}

export const requestPost = (url, options = {}) => {
    return request(url, options, 'post')
}

