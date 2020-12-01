import Vue from "vue";

export default Vue.extend( {
    name: "TableSelector",
    data() {
        return {
            tabs: [
                {name: '周一', key: 1},
                {name: '周二', key: 2},
                {name: '周三', key: 3},
                {name: '周四', key: 4},
                {name: '周五', key: 5},
                {name: '周六', key: 6},
                {name: '周日', key: 0},
                {name: '全部', key: 7},
                // {name: '单次', key: 8}
            ],
            nowDay: new Date().getDay(),  // 今天星期几
            className: ''
        }
    },
    methods: {
        onHandleTabClick: function (e: any) {
            const tabKey = e.target.getAttribute('data-tab'),
                tabName = e.target.getAttribute('data-name');

            this.className = tabKey;
            (this.$parent as any).onTabChange(tabKey, tabName);

        }
    }
})
