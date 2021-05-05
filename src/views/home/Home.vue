<template>
  <div id="home">
    <nav-bar class="home-nav">
      <p slot="center">购物街</p>
      </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '爆款']" class="tab-control"></tab-control>

   <ul>
     <li>num1</li>
     <li>num2</li>
     <li>num3</li>
     <li>num4</li>
     <li>num5</li>
     <li>num6</li>
     <li>num7</li>
     <li>num8</li>
     <li>num9</li>
     <li>num10</li>
     <li>num11</li>
     <li>num12</li>
     <li>num13</li>
     <li>num14</li>
     <li>num15</li>
     <li>num16</li>
     <li>num17</li>
     <li>num18</li>
     <li>num19</li>
     <li>num20</li>
     <li>num21</li>
     <li>num22</li>
     <li>num23</li>
     <li>num24</li>
     <li>num25</li>
     <li>num26</li>
     <li>num27</li>
     <li>num28</li>
     <li>num29</li>
     <li>num30</li>
     <li>num31</li>
     <li>num32</li>
     <li>num33</li>
     <li>num34</li>
     <li>num35</li>
     <li>num36</li>
     <li>num37</li>
     <li>num38</li>
     <li>num39</li>
     <li>num40</li>
     <li>num41</li>
     <li>num42</li>
     <li>num43</li>
     <li>num44</li>
     <li>num45</li>
     <li>num46</li>
     <li>num47</li>
     <li>num48</li>
     <li>num49</li>
     <li>num50</li>
   </ul>
   
    <div class="bottom-height"></div>
  </div>
</template>

<script>
import HomeSwiper from './ChildComps/HomeSwiper'
import HomeRecommendView from './ChildComps/HomeRecommendView.vue';
import FeatureView from './ChildComps/FeatureView.vue';

import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl'

import {getHomeMultidata} from 'network/home';



export default {
  components: {
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    NavBar, 
    TabControl
    },
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  #home {
    padding-top: 44px;
  }
  .bottom-height {
    height: 49px;
  }
  .tab-control {
    position: sticky;
    top: 44px
  }

</style>