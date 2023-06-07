import request from "@/utils/http"

export function getUserAPI({account,password}){
    return request({
        url:'login',
        method:'POST',
        data:{
            account,
            password
        }
    })
}