import TableSelector from "@/components/tableSelector/TableSelector.vue";
import BgmList from "@/components/bgmList/BgmList.vue";
import BgmPreferences from "@/components/bgmPreferences/BgmPreferences.vue";
import startApi from "@/common/data-source/requestApis/startApi";
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

// 基于类的vue组件
// 引入外部组件
@Component({
 components: {
     TableSelector,
     BgmList,
     BgmPreferences
 }
})
export default class BgmTable extends Vue{
    // 	data里的初始数据可以直接声明为实例的属性
    allItems: any = {}  // 所有数据
    items: any = []  // 选中数据

    $refs!: {
        tableSelector: HTMLDivElement,
    }

    // 组件methods里面的方法也可以直接声明为实例的方法
    onTabChange (tabKey: any, tabName: string): void {
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

    }

    onChange (title: string): void{
        this.$refs.tableSelector.className = "7"
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
