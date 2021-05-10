
const Daughter = (props) => {
    return (
        <div className="deughter">
        <h3>我是只读组件({props.daughter})</h3>
        </div>
    )
}
Daughter.defaultProps = {
    daughter:"不能修改值的只读组件"
}

export default Daughter