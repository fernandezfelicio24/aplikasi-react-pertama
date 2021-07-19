import React, {Component, Fragment} from 'react';
//import { connect } from 'react-redux';
import './LifeCycleComp.css';
import { RootContex } from '../../Home/Home';
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
        // setTimeout(()=> {
        //     this.setState({
        //         count: 2
        //     })
        // }, 5000)
    
    }

    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate')
        // console.log('nextProps', nextProps);
        console.log('nexstate', nextState);
        console.log('this state', this.setState);
        console.groupEnd();
        if(nextState.count >= 4){
            return false;
        }
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


    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    //State Management with REDUX
    // render(){
    //     console.log('render')
    //     return(
    //         <Fragment>

    //         <p>Halaman LifeCycle</p>
    //         <hr/>
    //         <button className="btn" onClick={this.changeCount}>Component Button{this.state.count}</button>
    //         <hr/>

    //         <p>Total Order: {this.props.order}</p>
    //         </Fragment>
    //     )
    // }


    render(){
        console.log('render')
        return(
            <RootContex.Consumer>
                {
                    value => {
                        return(
                            <Fragment>

                            <p>Halaman LifeCycle</p>
                            <hr/>
                            <button className="btn" onClick={this.changeCount}>Component Button{this.state.count}</button>
                            <hr/>
                
                            <p>Total Order: {value.state.totalOrder}</p>
                            </Fragment>
                        )
            
                    }
                }
            </RootContex.Consumer>
    
        )
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
}

//State Management with REDUX
// export default connect(mapStateToProps)(LifeCycleCop);

//State Management with CONTEXT API
export default LifeCycleCop;