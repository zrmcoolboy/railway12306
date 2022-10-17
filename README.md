# train-project

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

pinia 基本使用

下载：npm i pinia

main.js 引入并挂载 :
import {createPinia} from 'pinia'
const pinia = createPinia()
use(pinia)

创建 src 下 store：index.js
import { defineStore } from "pinia";

export const useMainStore = defindStore('main',{
state:() => {
return {

      }
    },
    getters:{},
    actions:{}

})

组件中使用：
import { useMainStore } from "@/store";
import {storeToRefs} from 'pinia'
const store = useMainStore();

<!-- 下面直接解构是不可以的，只是一次性的，不是响应式 -->

const { num, total } = store;

<!-- 可以使用pinia里面的api => storeToRefs  也是要引入  -->

const { num, total } = storeToRefs(store);

<!-- 之后直接在模板使用num、total即可   如：{{num}} -->

修改数据：
在组件内：

<!-- 方式一：通过函数调用： -->

const add = () => {
store.num++;
store.total++;
};

<!-- 方式二  批量更新修改 -->

const add = () => {
store.$patch({
num: store.num + 1,
total: store.total + 1,
});
};

<!-- 方式三  函数形式批量修改更新 -->

const add = () => {
store.$patch((state) => {
state.num++;
state.total++;
});
};

<!-- 方式四，逻辑比较多，可以封装在actions中，再在组件中直接调用方法 -->

actions:{
changeState() {
this.num++
}
}
const add = () => {
store.changeState();
};

<!-- pinia持久化存储 -->

利用插件 npm i pinia-plugin-persist

http://localhost:8080/#/zhifu?charset=utf-8& out_trade_no=1516934284&method=alipay.trade.page.pay.return&total_amount=100000.00&sign=WKpPpkD3wsQ5BH1OuXgd68hWguWTb1ZNBAhSZITWwYVGjBCH7f8LuZYhmfLDzuLHJ2crzWwEtTtqO6Gq9BNAni6UkKIqM%2FEH9F%2Beiqq%2Fh38y7dWn0PP%2FkWG5ZHFkwu0THFgXFa6Syp2nUfHvTJfGCuwuuSP3sDK6vg5rp2VR7%2FFI9MfQ1F11KJHE6pibONKp6sUNh07JHjqKS17BoGjd%2BoQVnOszNG6qlriZSUZhiwvu9FTRKLiT4wk2D8TDd5qiM8eFVXXXX557kxZNj%2BUIacZF39DMs5%2B%2BfjrVKYihKM5KAOpwtKhzEDgZK5SzAwhTRG6rhHuNPH7z50F10xhbBw%3D%3D& trade_no=2022101422001420190501489801&auth_app_id=2021000121682086&version=1.0&app_id=2021000121682086&sign_type=RSA2&seller_id=2088621993777452&timestamp=2022-10-14+20%3A41%3A44
