import { useState } from "react";

export function useLocaStorang(key,initialValue){
  // 声明状态
  const [storedValue,setStoredValue] =useState(function (){
    // 看看本地是否存在已有状态值
    const item = window.localStorage.getItem(key);
    // 如果本地已经有了就用本地的 否则使用initialValue
    return item?JSON.parse(item):initialValue
  })
  // 对设置状态的方法进行增强 添加状态同步到本地存储的功能
  const setState=(value)=>{
    // 获取新的状态值
    // 如果value 是函数类型，调用函数传递的现有状态，从返回值中获取新的状态
    // 如果value 是其他类型，直接作为状态值的使用
    const valueToStore=value instanceof Function? value(storedValue):value
    // 设置状态
    setStoredValue(valueToStore)
    // 将状态值同步到localStorage
    localStorage.setItem(key,JSON.stringify(valueToStore))
  }
  //返回值状态及设置状态的方法
  return [storedValue,setState]
}