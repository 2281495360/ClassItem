import request from './request'

// 用户名密码登录
export function loginByJson(data) {
    return request({
        url: '/api/u/loginByJson',
        method: 'post',
        data
    })
}