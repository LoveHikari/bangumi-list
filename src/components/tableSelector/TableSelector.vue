<template>
  <div class="table-left selector">
    <ol>
      <li v-for="tab in tabs" v-bind:key="tab.key" :class="className==tab.key?'cur':''">
        <a href="javascript:void(0);" :data-tab="tab.key" :data-name="tab.name" @click="onHandleTabClick($event)">
          {{ ($parent.$parent.isMaxMonth&&nowDay == tab.key) ? '今天' : tab.name}}
        </a>
      </li>
      <!--<li><a href="#">单次<span class="notify">1</span></a></li>-->
    </ol>
  </div>
</template>

<script src="./TableSelector.ts" lang="ts"></script>

<style scoped>

</style>