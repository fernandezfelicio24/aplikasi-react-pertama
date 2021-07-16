import React, {Component, Fragment} from 'react';
import CardProduct from './CardProduct/CardProduct';
import { connect } from 'react-redux';
import './Product.css';
class Product extends Component {

    // state = {
    //     order: 4,
    //     name: 'felicio'
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order : newValue
    //     })
    // }
    //fungsi arrow function
    // handlePlus = () => {
    // this.setState({
    //     order: this.state.order + 1
    // })
    // }

    //fungsi biasa
    // handleMinus = () =>{
    //     if (this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         })
    //     } 
        
    // }
    render(){
        return(
            <Fragment>
                <p>Halaman Product</p>
            <hr/>
            <div className="header">
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/id/thumb/a/ad/Logo_UKSW.jpg/250px-Logo_UKSW.jpg" alt="" />
                </div>
                <div className="troley">
                    <img src="https://cdn3.iconfinder.com/data/icons/shopping-solid-icons-vol-1/64/003-512.png" alt="" />
                    <div className="count">{this.props.order}</div>
                </div>
            </div>


        <CardProduct />
            </Fragment>
            

        );
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}
export default connect(mapStateToProps)(Product);