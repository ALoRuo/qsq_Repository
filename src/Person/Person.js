import React from 'react'
import './Person.css'
// const person=(props)=>{
// 	return <p>大家好,我是{props.name}，我今年{props.age}</p>
// }
// 
// 
// 
// 括号里的参数是自定义的，把在父组件的Person标签上的所有属性传过来，类似一个对象
// 
// 
// 
const person=(anything)=>{
	// return <p>大家好,我是{anything.name}，我今年{anything.age}</p>
	// 因为在Person标签被应用时中间加了话，所以需要用跟标签包裹起来
	return(
		<div className="Person">
			<p onClick={anything.propsClick}>大家好,我是{anything.name}，我今年{anything.age}</p>
			<p>{anything.children}</p>
			{/*input里不能使用value属性名，因为在父组件中使用了event.target.value*/}
			<input type="text" onChange={anything.propsChange} defaultValue={anything.name}/>
		</div>

		)
}
export default person