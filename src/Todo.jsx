import React, { Component } from 'react';
import a from './api/http'
class Todo extends Component {
    constructor(props){
        super(props)
        this.person = {
            name:'小明',
            age:18
        }
        this.state={
            dataAll:[]
        }
    }
    btnC = ()=>{
        console.log(11);
        fetch('/api/user/getAll').then(res=>res.json(),err=>{
            console.log(err)
        }).then(data=>{
            this.setState({
                dataAll:data
            })
        },err1=>{
            console.log(err1)
        })
    }
    render(){
        const {dataAll} = this.state;
        console.log(a);
        return(
            <>
                <div onClick={this.btnC} style={{cursor:'pointer'}}>我的名字叫{this.person.name},今年{this.person.age}岁</div>
                <ul>
                    {
                        dataAll.map(el=>{
                            return (
                                <li key={el.id}>
                                    我叫{el.username}
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}
export default Todo;
