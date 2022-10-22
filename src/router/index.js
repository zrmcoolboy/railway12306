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
        path: "/serverinfo/appointment",
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
      {
        path: "",
        name: "个人中心",
        component: () => import("@/views/Serverinfo/children/PersonInfo.vue"),
      },
      {
        path: "/serverinfo/carorder",
        name: "火车票订单",
        component: () =>
          import("@/views/Serverinfo/children/order/CarOrder.vue"),
      },
      {
        path: "/serverinfo/dalay",
        name: "候补订单",
        component: () =>
          import("@/views/Serverinfo/children/order/DalayOrder.vue"),
      },
      {
        path: "/serverinfo/ontime",
        name: "定期票订单",
        component: () => import("@/views/Serverinfo/children/order/OnTime.vue"),
      },
      {
        path: "/serverinfo/preorder",
        name: "约号订单",
        component: () =>
          import("@/views/Serverinfo/children/order/PreOrder.vue"),
      },
      {
        path: "/serverinfo/userinfo",
        name: "个人信息",
        component: () =>
          import("@/views/Serverinfo/children/userinfo/UserInfo.vue"),
      },
      {
        path: "/serverinfo/accountsafe",
        name: "账户安全",
        component: () =>
          import("@/views/Serverinfo/children/userinfo/AccountSafe.vue"),
      },
      {
        path: "/serverinfo/editpwd",
        name: "修改密码",
        component: () =>
          import("@/views/Serverinfo/children/userinfo/children/EditPwd.vue"),
      },
      {
        path: "/serverinfo/address",
        name: "乘车人",
        component: () =>
          import("@/views/Serverinfo/children/address/AddressHome.vue"),
        children: [
          {
            path: "",
            name: "乘车人",
            component: () =>
              import(
                "@/views/Serverinfo/children/address/children/Passenger.vue"
              ),
          },
          {
            path: "/serverinfo/address/addinfo",
            name: "增加信息",
            component: () =>
              import(
                "@/views/Serverinfo/children/address/children/AddInfo.vue"
              ),
          },
          {
            path: "/serverinfo/address/editinfo",
            name: "修改信息",
            component: () =>
              import(
                "@/views/Serverinfo/children/address/children/EditInfo.vue"
              ),
          },
        ],
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
  {
    path: "/vipinfo",
    name: "vipinfo",
    component: () => import("@/views/VipView/memberserve/MemberServe.vue"),
  },
  {
    path: "/tel",
    name: "tel",
    component: () => import("@/views/Tel.vue"),
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
