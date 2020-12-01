import Vue  from 'vue'
import BgmTable from "@/components/bgmTable/BgmTable.vue";
import Footer from "@/components/Footer.vue";
import startApi from "@/common/data-source/requestApis/startApi";

export default Vue.extend({
    name: "Home",
    components: {
        BgmTable,
        Footer
    },
    data() {
        return {
            maxYear: '', // 最新年
            maxMonth: '', // 最新月
            currentYear: '', // 选中的年
            currentMonth: '', // 选中的月
            isMaxMonth: false,  // 是否是最新月
            mainShow: false,
            subShow: '',
            archive: {},
            itemLength: 0
        }
    },
    created: function () {
        startApi.getArchive().then((req: any) => {
            this.archive = req.data.data;
            this.maxYear = Object.keys(this.archive)[Object.keys(this.archive).length-1];
            this.maxMonth =Object.keys((this.archive as any)[this.maxYear])[Object.keys((this.archive as any)[this.maxYear]).length-1];
            this.currentYear = this.maxYear;
            this.currentMonth = this.maxMonth;

            this.getBangumi(this.maxYear, this.maxMonth);
        });
    },
    methods: {
        getBangumi: function (year: string, month: string) {
            startApi.getBangumi(year, month).then((req: any) => {
                (this.$refs.bgmTable as any).allItems = req.data;
                this.itemLength = Object.keys(req.data).length;

                if (this.maxYear != year && this.maxMonth != month) {  // 不是当前季度
                    this.isMaxMonth = false;
                    (this.$refs.bgmTable as any).onTabChange("7", "全部");
                } else {  // 是当前季度
                    this.isMaxMonth = true;
                    const nowDay = new Date().getDay();
                    (this.$refs.bgmTable as any).onTabChange(nowDay, "");
                }
            });
        },
        onHandleMainClick: function () {  // 点击历史数据，显示年
            this.mainShow = !this.mainShow;
        },
        onHandleSubClick: function(e: any){  // 点击年，显示月份
            this.subShow = e.target.getAttribute('data-subid');
        },
        onHandleItemClick: function (e: any){  // 点击月份，更新数据
            const year = e.target.getAttribute('data-year');
            const month = e.target.getAttribute('data-month');
            this.currentYear = year;
            this.currentMonth = month;
            this.getBangumi(year, month);
            this.mainShow = false;
            this.subShow = '';
        },
        onChange: function (e: any){
            const title = e.target.value;
            (this.$refs.bgmTable as any).onChange(title);
        }
    }
});
