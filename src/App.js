import React, { Component } from 'react';
// import logo from './logo.svg';
import Person from'./Person/Person'
import './App.css';

class App extends Component {
  state={
    persons:[
      {id:1,name:"henry",age:"20"},
      {id:2,name:"Amy",age:"40"},
      {id:3,name:"make",age:"30"},
      

    ],
    showPerson:false
  }
  switchNamehander=(newname)=>{
    this.setState({
      persons:[
        {name:newname,age:"20"},
        {name:"Amy22",age:"40222"},
        {name:"make22",age:"30"},
      ]
    })
  }
  toggleText=()=>{
    let dos=this.state.showPerson
    this.setState({
      showPerson:!dos
    })
  }
  changeValue=(event,id)=>{
    // console.log(event.target.value)input输入框的内容
    // findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id
    })
    const person=this.state.persons[personIndex]
    person.name=event.target.value
    const persons=this.state.persons
    this.setState({
      persons:persons
    })
  }
  deleteChange=(index)=>{
    const persons=this.state.persons;
    persons.splice(index,1)
    // 因为person改过了，所以需要重新setState
    this.setState({
      persons:persons
    })
  }

  // 当内容发生变化时都会重新执行
  render() {
    const style={
      backgroundColor:"green",
      font:"inherit",
      color:"white",
      border:'1px solid blue',
      padding:'8px',
      cursor:"pointer"
    }
    let personarr=null
    if(this.state.showPerson)
    {
      personarr=(
          <div>
            {
              this.state.persons.map((item,index)=>{
                return <Person key={item.id} name={item.name} age={item.age} propsClick={this.deleteChange.bind(this,index)} propsChange={(event)=>{this.changeValue(event,item.id)}}></Person>
              })
            }
            {// <Person name={this.state.persons[0].name} age={this.state.persons[0].age} propsClick={this.switchNamehander.bind(this,'propsClick')} propsChange={this.changeValue}/>
                        // <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                        // <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>生而为人</Person>}
          }
          </div>

        )
      style.backgroundColor="red"
    }
    let classes=[];
    if(this.state.persons.length<=2)
    {
      classes.push('red')
    }
    if(this.state.persons.length<=1)
    {
      classes.push('bold')
    }
    return (
      <div className="App">
        <p className={classes.join(' ')}>hello React</p>
        {/*<button onClick={()=>this.switchNamehander('lolo')}>change</button>*/}
        {/*<button style={style} onClick={this.switchNamehander.bind(this,'baby')}>change</button>*/}
        <button style={style} onClick={this.toggleText}>toggle</button>
        {
          personarr
          // this.state.showPerson?
          // <div>
          //   <Person name={this.state.persons[0].name} age={this.state.persons[0].age} propsClick={this.switchNamehander.bind(this,'propsClick')} propsChange={this.changeValue}/>
          //   <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          //   <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>生而为人</Person>
          // </div>:null
        }
        
        
      </div>
    );
  }
}

export default App;
