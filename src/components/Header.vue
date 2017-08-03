<template>
  <div class="nav-bar">
    <span class="left-nav nav"><router-link to="/home">首页</router-link></span>
    <span class="right-nav nav" v-if="!isActive"><router-link to="/login">登录</router-link></span>
    <span class="right-nav nav" v-if="isActive" @click="logout">退出</span>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapActions } from 'vuex'
  import { USER_LOG_OUT } from '@/store/user'
  export default {
  	computed: mapState({isActive: state => state.user.isActive}),
  	methods: {
      ...mapActions([USER_LOG_OUT]),
      logout() {
        if (this.isActive) {
        	this.USER_LOG_OUT();
          this.$router.push('login')
        }
      }
    }
  }
</script>

<style lang="less" scoped>

  @header-height: 60px;
  .nav-bar {
    position: fixed;
    top: 0;
    opacity: 0.6;
    height: @header-height;
    width: 100%;
    background-color: #f8f8f8;

    .nav {
      line-height: @header-height;
      margin: 0 60px;
      color: #777;

      a {
        text-decoration: none;
        color: #777;
      }
    }
  }
</style>
