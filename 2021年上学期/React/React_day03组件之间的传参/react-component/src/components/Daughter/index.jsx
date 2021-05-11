import propTypes from "prop-types"
const Daughter = (props) => {
    return (
        <div className="daughter">
            {/* 3.子组件通过props(只读的，把props 作为函数组件的参数) */}
        <h3>我是只读组件({props.daughter})</h3>
        </div>
    )
}
// 给组件声明默认值
Daughter.defaultProps = {
    daughter:"不能修改值的只读组件"
}
// 规定我这个组件能接受的props的属性的数据类型
Daughter.propTypes = {
  daughter: propTypes.string
}

// 导出
export default Daughter