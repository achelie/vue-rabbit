<script setup>
import { getCategoryFilterAPI,getSubCategoryAPI } from '@/apis/category';
import { ref,onMounted } from 'vue';
import { useRoute } from 'vue-router';
import GoodItem from '../Home/components/GoodItem.vue';

// 获取子目录数据
const subCategory = ref([])
const route = useRoute()
const getSubCategory = async ()=>{
  const res = await getCategoryFilterAPI(route.params.id)
  subCategory.value = res.result
}

onMounted(() => {
  getSubCategory()
})

// 获取子目录的商品数据
const goodList = ref([])
const data = ref({
  id:route.params.id,
  page:1,
  pageSize:'20',
  sortField: 'publishTime' 
})
const getGoodList = async ()=>{
  const res = await getSubCategoryAPI(data.value)
  goodList.value = res.result.items
}

onMounted(()=>{
  getGoodList()
})

// 分类商品数据获取
const getCategoryGoods = ()=>{
  data.value.page = 1
  getGoodList()
}

// 无线滚动的实现
const disabled = ref(false)
const load = async()=>{
  data.value.page++
  const res = await getSubCategoryAPI(data.value)
  goodList.value = [...goodList.value,...res.result.items]
  if(res.result.items.length === 0){
    disabled.value=true
  }
}


</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${subCategory.parentId}` }">{{ subCategory.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{subCategory.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="data.sortField" @tab-change="getCategoryGoods">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
         <!-- 商品列表-->
         <GoodItem v-for="i in goodList" :key="i.id" :good="i" ></GoodItem>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>