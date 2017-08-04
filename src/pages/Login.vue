<template>
  <div>
    <common-login></common-login>
  </div>
</template>

<script>
  import LoginBox from '@/components/Login'
  export default {
  	components: {
  		"commonLogin": LoginBox
    },
    created() {
  		if(this.$store.state.user.isActive) {
  			this.$router.push('/home')
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
