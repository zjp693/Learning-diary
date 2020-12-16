// 关于用户的接口
export const user = {
  LoginUser: "login", // 用户登录
  GetUserL: "users",//用户数据
  AddUser: "users",//添加用户
  GetUser: "users",//回显用户信息
  UpdateUser: "users",// 根据id更新某一个用户的信息
  DeleteUser: "users",//删除角色
};

// 关于权限的接口
export const rights = {
  AsideMenus: "menus", // 获取左侧菜单权限
  GetRights: "rights",//侧边栏
};
// 关于角色的接口
export const role = {
  GetRoles: "roles"
};
// 
export const goods = {
  GetCategories: "categories"
  // Getdelete: ""
}