<template>
  <div class="home">
    <header>
      <div class="inner">
        <h1><a href="/">番组放送</a></h1>
        <ul class="header-nav nav-left">
          <li class="drop">
            <a href="#" @click="onHandleMainClick()">历史数据</a>
            <div :class="'drop-menu ' + (mainShow?'show':'')">
              <ul>
                <li v-for="(items, key) in archive" v-bind:key="key">
                  <a href="#" :data-subid="key" @click="onHandleSubClick($event)">{{key}}年</a>
                  <ul :class="'sub-menu ' + (subShow==key?'show':'')">
                    <li v-for="(item, key1) in items" :key="key1">
                      <a href="#" :data-year="key" :data-month="key1" @click="onHandleItemClick($event)">{{key1}}月</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">提交问题</a>
          </li>
        </ul>
        <ul class="header-nav nav-right">
          <li class="share-icon share-twitter">
            <a href="#">Twitter</a>
          </li>
          <li class="share-icon share-weibo">
            <a href="#">Weibo</a>
          </li>
          <li>
            分享本站
          </li>
        </ul>
      </div>
    </header>

    <div class="top">
      <div class="inner">
        <h2>{{currentYear}}年{{currentMonth}}月番组</h2>
        <div class="search-box">
<!--          <p>2015年12月12日更新&nbsp;&nbsp;共74部番组</p>-->
          <p>本季共 {{itemLength}} 部番组</p>
          <div class="searcher">
            <input type="search" placeholder="搜索当季番组" @input="onChange($event)">
            <a href="#" class="search-btn" title="搜索">搜索</a>
          </div>
        </div>
      </div>
    </div>

    <BgmTable ref="bgmTable" />
    <Footer/>
  </div>
</template>

<script src="./Home.ts" lang="ts"></script>
