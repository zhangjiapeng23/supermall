<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActivate"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-activate"></slot></div>
        <div :style="activateStyle">
            <slot name="item-name"></slot>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activateColor: {
            type: String,
            default: 'red'
        }
    },
    data() {
        return {
        }
    },
    computed: {
        isActivate() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activateStyle() {
            return this.isActivate? {color: this.activateColor}: {}
        }
    },
    methods: {
        itemClick() {
            console.log('click')
            this.$router.replace(this.path).catch(err=>{})
        }
    }


}
</script>

<style>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

  }

  .tab-bar-item img {
    width: 20px;
    height: 20px;
    margin-top: 3px;
    margin-bottom: 1px;
    vertical-align: middle;
  }
  
</style>