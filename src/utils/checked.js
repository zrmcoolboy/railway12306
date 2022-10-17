// 用户名
export const CheckUsername = (rule, value, callback) => {
  let reg = /^(?:[\u4e00-\u9fa5·]{2,16})$/;
  // /^[a-zA-Z0-9]{3,8}$/;
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入3-8位用户名"));
  } else {
    callback();
  }
};
// 密码
export const CheckPassword = (rule, value, callback) => {
  let reg = /^[a-zA-Z0-9]{6,12}$/;
  if (value === "") {
    callback(new Error("请输入密码"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入6-12位密码，包含大小写数字"));
  } else {
    callback();
  }
};
// 姓名
export const CheckIdcard = (rule, value, callback) => {
  let reg = /^(?:[\u4e00-\u9fa5·]{2,16})$/;
  if (value === "") {
    callback(new Error("请输入中文姓名"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入您的真实姓名"));
  } else {
    callback();
  }
};
// 身份证
export const CheckIdcardnum = (rule, value, callback) => {
  let reg =
    /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;
  if (value === "") {
    callback(new Error("请输入身份证号码"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入正确的身份号码"));
  } else {
    callback();
  }
};
// 邮箱
export const Checkemail = (rule, value, callback) => {
  let reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (value === "") {
    callback(new Error("请输入您的邮箱"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入正确的邮箱"));
  } else {
    callback();
  }
};
// 电话
export const Checktel = (rule, value, callback) => {
  let reg = /^(?:(?:\+|00)86)?1\d{10}$/;
  if (value === "") {
    callback(new Error("请输入您的电话号码"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入正确的电话号码"));
  } else {
    callback();
  }
};
