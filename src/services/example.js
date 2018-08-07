/**
 * Created by zhengchangshun on 2018/8/6.
 */

import {ajax} from 'tf-components'

export function queryExampleData(params) {
    return ajax.post('/example/queryExampleData', params)
}
