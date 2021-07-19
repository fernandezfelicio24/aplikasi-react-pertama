import React, {Component} from 'react';
import { GlobalConsumer } from '../../../../context/context';
//import {connect} from 'react-redux';
//import ActionType from '../../../../redux/reducer/globalActionType';
//import { RootContex } from '../../../Home/Home';
class Counter extends Component{
    // state = {
    //     order: 4,
    //     name: 'felicio'
    // }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }
    
    //fungsi arrow function
    // handlePlus = () => {
    // this.setState({
    //     order: this.state.order + 1
    // }, () => {
    //     this.handleCounterChange(this.state.order);
    // })
    // }

    //fungsi biasa
    // handleMinus = () =>{
    //     if (this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChange(this.state.order);
    //         })
    //     } 
        
    // }
    render(){
       // console.log(this.props);
        console.log(this);
            //State Management with REDUX
            // <div className="counter">
            // <button className="minus" onClick={this.props.handleMinus}>-</button>
            // <input type="text" value={this.props.order} />
            // <button className="plus"onClick={this.props.handlePlus}>+</button>
            // </div>

            //State Management with CONTEXT API
                return (
                    <div className="counter">
                    <button className="minus" onClick={()=>this.props.dispatch({type: 'MINUS_ORDER'})}>-</button>
                    <input type="text" value={this.props.state.totalOrder} />
                    <button className="plus"onClick={()=>this.props.dispatch({type: 'PLUS_ORDER'})}>+</button>
                    </div>
                )
        
    }
}

// const mapStateToProps = (state) =>{
//     return {
//         order: state.totalOrder
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
//         handleMinus:() => dispatch({type: ActionType.MINUS_ORDER})
//     }
// }
 //State Management with REDUX
//export default connect(mapStateToProps,mapDispatchToProps)(Counter);

//State Management with CONTEXT API
export default GlobalConsumer (Counter);