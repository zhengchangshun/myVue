/**
 * Created by zhengchangshun on 2018/8/6.
 */

import request from '@/libs/request'

export function queryExampleData(params) {
    return request('/example/queryExampleData', params)
}
