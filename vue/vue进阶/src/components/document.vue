<template>
  <div>
    哒哒哒
    <hr>
    <ul class="nav">
      <router-link :to="{name:'Document'}" exact tag="li">
        <a>study</a>
      </router-link>
      <router-link :to="{name:'work'}" tag="li">
        <a>work</a>
      </router-link>
      <router-link :to="{name:'hoddy'}" tag="li">
        <a>hoddy </a>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="">
</style>