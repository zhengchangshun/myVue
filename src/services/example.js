/**
 * Created by zhengchangshun on 2018/8/6.
 */

import {requestGet, requestPost} from '../libs/request'

export function queryExampleData(params) {
    return requestPost('/example/queryExampleData', params)
}
