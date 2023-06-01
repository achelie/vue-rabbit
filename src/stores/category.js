import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
  const navList = ref([])
  const getCategory = async () => {
    const res = await getCategoryAPI()
    navList.value = res.result
    console.log(res.result);
  }

  return { navList,getCategory }
})
