import { defineStore } from "pinia";
import { ref } from "vue";
import { getUserAPI } from "@/apis/user";

export const useUserStore = defineStore('user', () => {
    const userState = ref({})
    const getUserState = async ({ account, password }) => {
        const res = await getUserAPI({ account, password })
        userState.value = res.result
    }
    return {
        userState,
        getUserState
    }
}, {
    persist: true,
})