<template>
  <div>
    <common-bar></common-bar>
    <common-content></common-content>
  </div>
</template>

<script>
  import Siderbar from "@/components/Siderbar"
  import Content from "@/components/Content"
  export default {
  	components: {
  		"commonBar": Siderbar,
      "commonContent": Content
    }
  }
</script>
