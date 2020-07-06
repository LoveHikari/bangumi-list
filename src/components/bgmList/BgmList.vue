<template>
  <div class="table-right data-list">
    <ul>
<!--      <li class="new expanded">-->
<!--        <div class="item-scroller">-->
<!--          <div class="item-main">-->
<!--            <div class="title">-->
<!--              <a href="#" title="旦那が何を言っているかわからない件2スレ目 (第2期)">关于完全听不懂老公-->
<!--                在说什么的事 2期</a>-->
<!--            </div>-->
<!--            <div class="time-jp">-->
<!--              <span class="m-show">日本：</span>周一&nbsp;&nbsp;15:30-->
<!--            </div>-->
<!--            <div class="time-cn">-->
<!--              <span class="m-show">大陆：</span>周一&nbsp;&nbsp;16:30-->
<!--            </div>-->
<!--            <div class="sites">-->
<!--              <ul>-->
<!--                <li><a href="#">A站</a></li>-->
<!--                <li><a href="#">B站</a></li>-->
<!--                <li><a href="#">C站</a></li>-->
<!--                <li><a href="#">乐视</a></li>-->
<!--                <li><a href="#">优酷</a></li>-->
<!--                <li><a href="#">土豆</a></li>-->
<!--                <li><a href="#">乐视</a></li>-->
<!--                <li><a href="#">爱奇艺</a></li>-->
<!--                <li><a href="#">PPTV</a></li>-->
<!--                <li><a href="#">迅雷</a></li>-->
<!--                <li><a href="#">腾讯</a></li>-->
<!--                <li><a href="#">芒果</a></li>-->
<!--              </ul>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="item-sub">-->
<!--            <p><span>原名：</span>旦那が何を言っているかわからない件2スレ目 (第2期)</p>-->
<!--            <div class="sub-left">-->
<!--              <p><span>官方网站：</span><a href="http://danmachi.com/">http://danmachi.com/</a></p>-->
<!--              <p>-->
<!--                <span>Bangumi：</span><a-->
<!--                  href="http://bangumi.tv/subject/116871">http://bangumi.tv/subject/116871</a>-->
<!--              </p>-->
<!--            </div>-->
<!--            <div class="sub-right">-->
<!--              <p><span>放送日期：</span>2015-03-03</p>-->
<!--              <p><span>完结日期：</span>2015-03-03</p>-->
<!--            </div>-->
<!--            <p><span>备注：</span>备注备注备注备注备注备注备注备注备注备注备注</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </li>-->
      <li v-for="item in this.$parent.items" :key="item" :class="(item.newBgm?'new':'') + (item.bgmId==expanded?' expanded':'')">
        <div class="item-main">
          <div class="title">
            <a href="javascript:void(0);" :title="item.titleJP" :data-bgmId="item.bgmId" @click="onHandleSubClick($event)">{{item.titleCN}}
            </a>
          </div>
          <div class="time-jp">
            {{getWeek(item.weekDayJP)}}&nbsp;&nbsp;{{getTime(item.timeJP)}}
          </div>
          <div class="time-cn">
            {{getWeek(item.weekDayCN)}}&nbsp;&nbsp;{{getTime(item.timeCN)}}
          </div>
          <div class="sites">
            <ul>
              <li v-if="item.onAirSite.length==0"><span class="empty">暂无</span></li>
              <li v-else v-for="airSite in item.onAirSite" :key="airSite"><a :href="airSite" target="_blank">{{getAirSite(airSite)}}</a></li>
            </ul>
          </div>
        </div>
        <div class="item-sub">
          <p><span class="sub-title">原名：</span>{{item.titleJP}}</p>
          <div class="sub-left">
            <p><span class="sub-title">官方网站：</span><a :href="item.officalSite" target="_blank">{{item.officalSite}}</a></p>
            <p>
              <span class="sub-title">Bangumi：</span>
              <a :href="'http://bangumi.tv/subject/'+item.bgmId" target="_blank">http://bangumi.tv/subject/{{item.bgmId}}</a>
            </p>
          </div>
          <div class="sub-middle">
            <p><span class="sub-title">放送日期：</span>{{item.showDate}}</p>
            <p v-if="item.endDate!=undefined"><span class="sub-title">完结日期：</span>{{item.endDate}}</p>
          </div>
          <div class="sub-right">
            <p>
              <input type="checkbox">
              <label>关注</label>
            </p>
            <p>
              <input type="checkbox">
              <label >隐藏</label>
            </p>
          </div>
          <p><span class="sub-title">备注：</span>备注备注备注备注备注备注备注备注备注备注备注</p>
        </div>

      </li>
    </ul>
  </div>
</template>

<script src="./BgmList.ts" lang="ts"></script>

<style lang="scss" scoped>
@import './BgmList.scss';
</style>