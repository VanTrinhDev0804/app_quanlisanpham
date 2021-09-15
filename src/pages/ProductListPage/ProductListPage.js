import React, { Component } from 'react';
import ProductItem from '../../component/ProductItem/ProductItem';
import ProductList from '../../component/ProductList/ProductList';
import { connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { actDeleteProductRequest, actFetchProductsRequest } from '../../actions/index'

class ProductListPage extends Component {
  
    componentDidMount(){
        this.props.onFetchAllProduct();
    };
    onDeleteItem = (id) =>{
        this.props.onDeleteProduct(id);
    }

    

    render() {
        var { products } = this.props;
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    
                    <Link to='/product/add' className="btn btn-primary mb-3">Thêm sản phẩm
                    </Link>   
                        <ProductList>
                            {this.showProductItem(products)}
                        </ProductList>
                 </div> 
            </div>
        );
    }
    showProductItem=(products)=> {
       var result = null;
        if(products.length > 0){
            result = products.map((product,index)=>{
                return(
                    <ProductItem
                        key = {index}
                        product ={product}
                        index={index}
                        onDeleteItem = { this.onDeleteItem}
                    />
                )
            })
        }
       return result; 
    }
}
const mapStateToProps = state =>{
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onFetchAllProduct : () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct :(id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);