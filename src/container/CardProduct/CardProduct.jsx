import React, {Component} from 'react';

class CardProduct extends Component {

    state = {
        order: 4,
        name: 'felicio'
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }
    //fungsi arrow function
    handlePlus = () => {
    this.setState({
        order: this.state.order + 1
    }, () => {
        this.handleCounterChange(this.state.order);
    })
   
    }

    //fungsi biasa
    handleMinus = () =>{
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        } 
        
    }
    render(){
        return(
            


            <div className="card">
                <div className="img-thumb-prod"> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH1Bkr-llqUhGYS3lgFpN2TvgVsrh4GUVAnw&usqp=CAU" alt=""/>
                </div>
            <p className="product-title">Daging Babi Rica Rasa Tai plus gosih Tepung Crispy [ 1 Container ] </p>
            <p className="product-price">Rp 34.0000 </p>

            <div className="counter">
                <button className="minus" onClick={this.handleMinus}>-</button>
                <input type="text" value={this.state.order} />
                <button className="plus"onClick={this.handlePlus}>+</button>
            </div>

            </div>
    
            

        );
    }
}

export default CardProduct;