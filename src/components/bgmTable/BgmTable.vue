<template>
  <div class="main">
    <div class="inner table">
      <div class="table-header">
        <div class="table-left">
          <a href="#" class="setting-btn">设置</a>
        </div>
        <div class="table-right">
          <div class="table-header-info">
            <div class="title">
              作品名
            </div>
            <div class="time-jp">
              日本放送时间
            </div>
            <div class="time-cn">
              <span class="m-hide">大陆放送时间</span><span class="m-show">放送时间</span>
            </div>
            <div class="sites">
              放送站点
            </div>
          </div>
        </div>
      </div>
      <div class="table-container">
        <TableSelector ref="tableSelector" />
        <BgmList />
        <BgmPreferences />
      </div>
    </div>

  </div>
</template>

<script src="./BgmTable.ts" lang="ts"></script>

<style scoped>

</style>