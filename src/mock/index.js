/**
 * Created by zhengchangshun on 2018/8/7.
 */
import Mock from 'mockjs'
import ExampleAPI from './example'


// 测试
Mock.mock('/example/queryExampleData', 'post', ExampleAPI.queryExampleData)

export default Mock
