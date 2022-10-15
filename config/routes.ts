/**
 * 参考配置：https://pro.ant.design/zh-CN/docs/new-page
 * name:string 配置菜单的 name，如果配置了国际化，name 为国际化的 key。
 * icon:string 配置菜单的图标，默认使用 antd 的 icon 名，默认不适用二级菜单的 icon。
 * access:string 权限配置，需要预先配置权限
 * hideChildrenInMenu:true 用于隐藏不需要在菜单中展示的子路由。
 * hideInMenu:true 可以在菜单中不展示这个路由，包括子路由。
 * hideInBreadcrumb:true 可以在面包屑中不展示这个路由，包括子路由。
 * headerRender:false 当前路由不展示顶栏
 * footerRender:false 当前路由不展示页脚
 * menuRender: false 当前路由不展示菜单
 * menuHeaderRender: false 当前路由不展示菜单顶栏
 * flatMenu 子项往上提，只是不展示父菜单
 */
const routes = [
  {
    name: 'react子应用',
    path: '/',
    icon: 'smile',
  },
];
export default routes;
