import React from "react";
 // 引入路由 
import { HashRouter, Route, Link } from "react-router-dom"; 
class App extends React.Component { 
render() {
 return ( 
　　// 全局应用组件路由 
　　// 此后所有内容 都在 HashRouter 
　　<HashRouter> 
　　{/* HashRouter 里面只能有一个根标签 */}
 　　<div>123</div>
　　 </HashRouter> ); 
　　} }

export default App;