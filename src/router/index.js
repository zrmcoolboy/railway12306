import { ElMessage } from "element-plus";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/regist",
    name: "regist",
    component: () => import("@/views/RegistView.vue"),
  },
  {
    path: "/404",
    name: "pageNotExist",
    component: () => import("@/views/NotFind.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
  // 单程
  {
    path: "/single",
    name: "singleLine",
    component: () => import("@/views/singleline/SingleLine.vue"),
  },
  // 旅游详情
  {
    path: "/traveldetail",
    name: "旅游详情",
    component: () => import("@/views/traveldetail/TravelDetail.vue"),
  },
  {
    path: "/shopserver",
    name: "订餐服务",
    component: () => import("@/views/Foodshop/FoodShop.vue"),
    children: [
      {
        path: "",
        name: "搜索食物",
        component: () => import("@/views/Foodshop/Children/FindShop.vue"),
      },
      {
        path: "/shopdetail",
        name: "店铺",
        component: () =>
          import("@/views/Foodshop/Children/FoodDetail/FoodDetail.vue"),
      },
      {
        path: "/goodsinfo",
        name: "食物信息",
        component: () =>
          import("@/views/Foodshop/Children/FoodDetail/Children/GoodsInfo.vue"),
      },
    ],
  },
  {
    path: "/serverinfo",
    name: "服务信息",
    component: () => import("@/views/Serverinfo/ServerInfo.vue"),
    children: [
      {
        path: "",
        name: "预约服务",
        component: () =>
          import("@/views/Serverinfo/children/AppointmentView.vue"),
      },
      {
        path: "/serverinfo/lost",
        name: "遗失服务",
        component: () => import("@/views/Serverinfo/children/lost.vue"),
      },
      {
        path: "/serverinfo/userback",
        name: "用户反馈",
        component: () => import("@/views/Serverinfo/children/feedback.vue"),
      },
    ],
  },
  {
    path: "/server/ordercar",
    name: "网约车服务",
    component: () => import("@/views/Serverinfo/children/carsharing.vue"),
  },
  {
    path: "/server/checked",
    name: "托运服务",
    component: () => import("@/views/Serverinfo/children/checked.vue"),
  },
  {
    path: "/server/statebus",
    name: "车站指引",
    component: () => import("@/views/Serverinfo/children/stationguidance.vue"),
  },
  {
    path: "/shopcart",
    name: "购物车",
    component: () => import("@/views/Shopcart/ShopCart.vue"),
  },
  {
    path: "/zhifu",
    name: "zhifu",
    component: () => import("@/views/zhifu.vue"),
  },
  {
    path: "/order",
    name: "order",
    component: () => import("@/views/Shopcart/Order.vue"),
  },
  {
    path: "/buyticket",
    name: "buyticket",
    component: () => import("@/views/BuyTicket/BuyTicket.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  const token = localStorage.getItem("token");
  if (to.path == "/shopdetail") {
    if (token) {
      next();
    } else {
      ElMessageBox.alert("<strong>请先登录</strong>", "温馨提示", {
        confirmButtonText: "确定",
        dangerouslyUseHTMLString: true,
        center: true,
      }).then(() => {
        next("login");
      });
    }
  } else if (to.path == "/buyticket") {
    if (token) {
      next();
    } else {
      ElMessageBox.alert("<strong>请先登录</strong>", "温馨提示", {
        confirmButtonText: "确定",
        dangerouslyUseHTMLString: true,
        center: true,
      }).then(() => {
        next("login");
      });
    }
  } else {
    next();
  }
});

export default router;
