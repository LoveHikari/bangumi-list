import Vue  from 'vue'
import startApi from "@/common/data-source/requestApis/startApi";

export default Vue.extend({
    name: "BgmList",
    data() {
      return {
          expanded: ''
      }
    },
    mounted: function (){
        const p: any = this.$parent.$parent;
        p.getBangumi(p.maxYear, p.maxMonth);
    },
    methods: {
        getWeek: function (weekDay: any){
            let week;
            if(weekDay == 0) week = "周日"
            if(weekDay == 1) week = "周一"
            if(weekDay == 2) week = "周二"
            if(weekDay == 3) week = "周三"
            if(weekDay == 4) week = "周四"
            if(weekDay == 5) week = "周五"
            if(weekDay == 6) week = "周六"
            return week;
        },
        getTime: function (time: string) {
            if (time == ''){
                return '(预计)'
            }else {
                return  time.substring(0, 2) + ':' + time.substring(2, 4);
            }
        },
        getAirSite: function (airSite: string) {
            if(airSite.search('nicovideo.jp')>0) return 'N站'
            if(airSite.search('acfun.cn')>0) return 'A站'
            if(airSite.search('bilibili')>0) return 'B站'
            if(airSite.search('')>0) return 'C站'
            if(airSite.search('le')>0) return '乐视'
            if(airSite.search('youku')>0) return '优酷'
            if(airSite.search('')>0) return '土豆'
            if(airSite.search('iqiyi')>0) return '爱奇艺'
            if(airSite.search('pptv')>0) return 'PPTV'
            if(airSite.search('')>0) return '迅雷'
            if(airSite.search('qq')>0) return '腾讯'
            if(airSite.search('mgtv')>0) return '芒果'
            if(airSite.search('sohu')>0) return '搜狐'
        },
        onHandleSubClick: function (e: any){
            const className = e.target.parentNode.parentNode.parentNode.className;
            if (className.search("expanded") > 0){
                e.target.parentNode.parentNode.parentNode.className = className.replace(" expanded", "");
            } else {
                e.target.parentNode.parentNode.parentNode.className  += " expanded";
            }
        }
    }
})
