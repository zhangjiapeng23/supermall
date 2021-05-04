<template>
  <div>
  <tab-bar>
      <tab-bar-item path='/home'>
          <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
          <img slot="item-icon-activate" src="~assets/img/tabbar/homeActive.svg" alt="">
          <p slot="item-name">home</p>
      </tab-bar-item>
      <tab-bar-item path='/category'>
          <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
          <img slot="item-icon-activate" src="~assets/img/tabbar/categoryActive.svg" alt="">
          <p slot="item-name">category</p>
      </tab-bar-item>
      <tab-bar-item path='/shopcart'>
          <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
          <img slot="item-icon-activate" src="~assets/img/tabbar/shopcartActive.svg" alt="">
          <p slot="item-name">shopcart</p>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
          <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
          <img slot="item-icon-activate" src="~assets/img/tabbar/profileActive.svg" alt="">
          <p slot="item-name">profile</p>
      </tab-bar-item>
  </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  components: { TabBar, TabBarItem },
  name: 'MainTabbar'
}
</script>

<style>

</style>