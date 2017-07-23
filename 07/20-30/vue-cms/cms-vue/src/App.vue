<template>
  <div id="app">
    <mt-header  title="3天完成"></mt-header>

    <router-view></router-view>
    <!--nav bar  -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " :to="{name:'Home'}">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link  :to="{name:'member'}" class="mui-tab-item" >
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'shopcart'}">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'search'}">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>

</style>
