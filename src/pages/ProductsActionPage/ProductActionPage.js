import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions/index';

class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            id : '',
            txtName : '',
            txtPrice :'',
            chkbStatus : ''
        }
    }

    componentDidMount(){
        var { match } = this.props
        if(match){
            var id = match.params.id;
            this.props.onGetProduct(id);
            
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            var { itemEditing }  = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName : itemEditing.name ,
                txtPrice: itemEditing.price,
                chkbStatus : itemEditing.status
            })  
        }
    }
    onChange = (e) =>{
        var target = e.target ;
        var name = target.name;
        var value = target.type ==='checkbox' ? target.checked :target.value;
        this.setState({
            [name] : value
        })
    }
    onSave = (e) =>{
        e.preventDefault();
        var {id, txtName , txtPrice , chkbStatus} = this.state;
        var {history} = this.props;
        var product = {
            id :id,
            name :txtName,
            price : txtPrice,
            status: chkbStatus
        }
        if(id){
            this.props.onUpDateProduct(product)
        }else{
           this.props.onAddProduct(product);
        }
        history.goBack();
            
    }

    render() {
        var { txtName , txtPrice , chkbStatus} = this.state;
        return (
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                
                <form onSubmit ={this.onSave}>
                    <legend>Thêm sản phẩm </legend>
                
                    <div className="form-group">
                        <label >Tên sản phẩm: </label>
                        <input 
                        type="text" 
                        className="form-control" 
                        name = 'txtName'
                        value= {txtName}
                        onChange ={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Giá: </label>
                        <input 
                        type="number" 
                        className="form-control" 
                        name = 'txtPrice' 
                        value= {txtPrice}
                        onChange ={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trạng thái: </label>

                        <div className="checkbox">
                            <label>
                                <input 
                                type="checkbox" 
                                name = 'chkbStatus'
                                value= {chkbStatus}
                                checked ={chkbStatus}
                                onChange ={this.onChange}
                                />
                                Còn hàng
                            </label>
                        </div>
                    
                    </div>
                    <Link  to ="/product-list"className="btn btn-info">Trở lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
                
            </div>
            
        );
    }
}

const mapStateToProps = state =>{
    return {
        itemEditing: state.itemEditing
    }
}
const mapDispatchToProps = (dispatch , props) =>{
    return {
        onAddProduct : (product) =>{
            dispatch(actAddProductRequest(product));
        },
        onGetProduct : (id) =>{
            dispatch(actGetProductRequest(id));
        },
        onUpDateProduct :(product) =>{
            dispatch(actUpdateProductRequest(product));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);