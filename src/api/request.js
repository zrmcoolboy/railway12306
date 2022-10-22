import { start } from "nprogress";
import request from "./index";
// 旅游
export const getTravel = () => {
  return request({
    method: "get",
    url: "/travel",
  });
};
// 旅游详情页
export const detailInfo = (params) => {
  return request({
    url: "/detailinfo",
    params: { id: params },
  });
};
// 登录
export const intoLogin = (info) => {
  return request.post("/user/login", info);
};
// 注册
export const intoRegist = (info) => {
  return request.post("/user/regist", info);
};
// 获取个人信息
export const getPersonInfo = (userid) => {
  return request({
    url: "/user/personinfo",
    params: { userid: userid },
  });
};
// 获取相关联的人
export const getAllPersonInfo = (userid) => {
  return request({
    url: "/user/contact",
    params: { userid: userid },
  });
};
// 添加乘客
export const SavePassenger = (data) => {
  return request({
    url: "/user/passenger",
    method: "post",
    data: data,
  });
};

// 删除乘客人
export const delPassenger = (data) => {
  return request.post("/user/delpassenger", data);
};
// 更新乘客人
export const updatePassenger = (data) => {
  return request.post("/user/updatepassenger", data);
};

//修改个人信息
export const editPersonInfo = (info) => {
  return request.post("/user/editinfo", info);
};
// 修改密码
export const editPassword = (data) => {
  return request.post("/user/editpwd", data);
};

// 车票查询
export const findTicket = (info) => {
  return request.post("/train", info);
};

// 降序
export const sortDesc = (start, end, type) => {
  return request({
    url: "/ticketsort",
    params: { start: start, end: end, type: type },
  });
};

// 按车辆类型查询
export const FindTypeTrain = (type, start, end) => {
  return request({
    url: "/traintype",
    params: { type: type, start: start, end: end },
  });
};

// 商铺列表
export const getShopList = () => {
  return request.get("/shopinfo");
};
export const getGoodsInfo = (params) => {
  return request({
    url: "/goodsinfo",
    params: { id: params },
  });
};
// 各类食品
export const getTypeFood = (params) => {
  return request({
    url: "/foodtype",
    params: { typeid: params },
  });
};

// 车次模糊查询
export const likeSeach = (params) => {
  return request({
    url: "/search",
    params: { keyword: params },
  });
};

// 城市数据
// 热门城市
export const getHotCity = () => {
  return request.get("/citise");
};
// abcde城市
export const getWordCity = (params) => {
  return request({
    url: "/detailcity",
    params: { groupnum: params },
  });
};
// 首字母城市
export const getKetCity = (params) => {
  return request({
    url: "/keywordcity",
    params: { keyword: params },
  });
};

// 加入购物车
export const addCart = (foodinfo, userid) => {
  return request({
    url: "/toaddcart",
    method: "post",
    data: { info: foodinfo, userid: userid },
  });
};

// 获取购物车信息
export const getCartGoods = (params) => {
  return request({
    url: "/getcartinfo",
    params: { userid: params },
  });
};
// 支付成功删除购物车商品
export const delCartGoods = (userid, goodsid) => {
  return request({
    url: "/delcartgoods",
    method: "post",
    data: { userid: userid, goodsid: goodsid },
  });
};

// 支付发送
export const paysend = (orderid, money, foodinfo) => {
  return request({
    url: "/payment",
    method: "post",
    data: { orderid: orderid, money: money },
  });
};
// 支付完跳转后页面发起的请求，确认支付信息。
export const paysend2 = (out_trade_no, trade_no) => {
  return request({
    url: "/queryOrder",
    method: "post",
    data: { out_trade_no: out_trade_no, trade_no: trade_no },
  });
};
