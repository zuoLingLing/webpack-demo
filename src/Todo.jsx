import React, { Component } from 'react';

class Todo extends Component {
    constructor(props){
        super(props)
        this.person = {
            name:'小明',
            age:18
        }
    }
    render(){
        console.log(process,111);
        return(
            <>
                <div>我的名字叫{this.person.name},今年{this.person.age}岁</div>
            </>
        )
    }
}
export default Todo;
