// 获取面包屑导航的数据
import { onMounted, ref } from 'vue';
import { getCategoryAPI } from '@/apis/category';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
export function useCrumb() {
    const breadCrumbData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        breadCrumbData.value = res.result
    }

    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })

    onMounted(() => {
        getCategory()
    })
    return {
        breadCrumbData
    }
}