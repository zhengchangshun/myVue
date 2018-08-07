/**
 * Created by zhengchangshun on 2018/8/6.
 */

import {ajax} from 'tf-components'

export function queryCompany(params) {
    return ajax.post('/tf56mall/pubLine/queryCompany', params)
}
