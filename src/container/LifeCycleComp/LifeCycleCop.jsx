import React, {Component} from 'react';
import './LifeCycleComp.css';
class LifeCycleCop extends Component{

    //Kita membuat lifecycle pertama yaitu construktor
    constructor (props){
        //kita meggunakan props dikarenakan class extend ke Component
        super(props)
        this.state = {
            count:1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount (){
        console.log('componentDidMount')
        setTimeout(()=> {
            this.setState({
                count: 2
            })
        }, 3000)
    
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
         return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDiUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render(){
        console.log('render')
        return(
            <button className="btn">Component Button{this.state.count}</button>
        )
    }
}

export default LifeCycleCop;