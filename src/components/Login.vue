<template>
  <div class="box">
    <input class="input" type="text" @focus="clearErr" placeholder="用户名" v-model="username">
    <p style="font-size: 12px; color:red">{{warning}}</p>
    <button @click="submit" v-if="btn">登录</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapState } from 'vuex'
  import { USER_LOG_IN } from '@/store/user'
  export default {
  	data() {
  		return {
        username: '',
        warning: '',
        btn: ''
      }
    },
    methods: {
      ...mapActions([USER_LOG_IN]),
  		submit() {
  			if (!!this.username) {
  				this.USER_LOG_IN(this.username);
  				this.$router.push('home')
        }
        else {
  				this.warning = "请输入用户名"
        }
      },
      clearErr() {
      	this.warning = '';
      	this.btn = true
      }
    },
    computed: mapState({name: state => state.user.username})
  }
</script>

<style lang="less" scoped>
  @import '../style/constant.less';

  @keyframes border-extend {
    to {
      border-bottom: 2px solid @pink;
      width: 80%;
    }
  }

  .box {
    position: relative;
    top: 250px;
    left: 40%;
    width: 300px;
    height: 200px;
    border-radius: 15px;
    font-size:16px;

    * {
      border: none;
      outline:none;
    }

    input {
      width: 60%;
      height: 30px;
      transition: width, border-color, 1s, ease-in-out;
      border-bottom: 2px solid @green;

      &:focus {
        width: 80%;
        border-color: @pink;
      }
    }

    button {
      border-radius: 5px;
      height: 30px;
      background-color: @blue;
      width: 80%;
      color: white;
    }
  }
</style>
