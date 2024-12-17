import { defineStore } from "pinia";
import { ref } from "vue";
import { getUserAPI,getRegisterUserAPI } from "@/apis/user";

export const useUserStore = defineStore('user', () => {
    const userState = ref({})
    // 获取登录数据
    const getUserState = async ({ account, password }) => {
        const res = await getUserAPI({ account, password })
        userState.value = res.result
    }
    // 获取注册数据
    const getRegisterUserState = async({account,password})=>{
        const res = await getRegisterUserAPI({ account, password })
        userState.value = res.result
    }
    // 清空用户数据
    const clearUserState = ()=>{
        userState.value = {}
    }
    return {
        userState,
        getUserState,
        clearUserState,
        getRegisterUserState
    }
}, {
    persist: true,
})