import React from 'react'
import useAuth from './useAuth'

function AuthGuard({children}) {
  // 调用鉴权钩子，获取异步状态及鉴权结果
  const {auth,loading}=useAuth()
  // 如果异步状态为等待，渲染等待过程中的ui界面
  if(loading) return <div>loading</div>
  // 判断鉴权结果 如果通过 进入目标路由 如果没有通过 重定向到执行鉴权的页面
  return  auth?children:<navigator to="/login"></navigator>
}

export default AuthGuard