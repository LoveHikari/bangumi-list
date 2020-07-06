import TableSelector from "@/components/tableSelector/TableSelector.vue";
import BgmList from "@/components/bgmList/BgmList.vue";
import BgmPreferences from "@/components/bgmPreferences/BgmPreferences.vue";
import startApi from "@/common/data-source/requestApis/startApi";

export default {
    name: "BgmTable",
    components: {
        TableSelector,
        BgmList,
        BgmPreferences
    },
    data() {
        return {
            allItems: {},  // 所有数据
            items: [], // 选中数据
        }
    },
    // created() {
    // },
    methods: {
        onTabChange: function (tabKey: any, tabName: string) {
            this.$refs.tableSelector.className = tabKey;
            if (tabKey == "7") {
                this.items = this.allItems
            }else {
                const items = []
                for (const key in this.allItems) {
                    const item = this.allItems[key];
                    const weekDayJP = item.weekDayJP;
                    if (weekDayJP == tabKey){
                        items.push(item)
                    }
                }
                this.items = items
            }

        },
        onChange: function (title: string){
            this.$refs.tableSelector.className = 7
            const items = []
            if (title == '') {
                this.items = this.allItems
            } else {
                for (const key in this.allItems) {
                    console.log(this.allItems)
                    const item = this.allItems[key];
                    const titleCN = item.titleCN;
                    if (title == ''){
                        this.items = this.allItems
                    }
                    if (titleCN.search(title) > 0){
                        items.push(item)
                    }
                }
                this.items = items
                console.log(this.items)
            }

        }
    }
}