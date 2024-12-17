import request from "@/utils/http"

// 登录接口
export function getUserAPI({account,password}){
    return request({
        url:'/login',
        method:'POST',
        data:{
            account,
            password
        }
    })
}
// 注册接口
export function getRegisterUserAPI({account,password}){
    return request({
        url:'/register',
        method:'POST',
        data:{
            account,
            password
        }
    })
}