<script setup>
import LayoutNav from "@/views/Layout/components/LayoutNav.vue"
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue"
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue"
import LayoutFixed from "./components/LayoutFixed.vue";
import {useCategoryStore} from "@/stores/category"
import { onMounted } from "vue";
// 请求导航数据

const categoryStore = useCategoryStore()

onMounted(()=>{
    categoryStore.getCategory()
})

</script>

<template>
    <LayoutFixed></LayoutFixed>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <RouterView ></RouterView>
    <LayoutFooter></LayoutFooter>
</template>