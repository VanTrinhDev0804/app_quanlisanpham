import * as types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const actFetchProductsRequest = ()=>{
    return (dispatch) => {
        return callApi('product', 'GET', null ).then(res =>{
            dispatch(actFetchAllProducts(res.data));
        })
    }
}

export  const  actFetchAllProducts = (products) =>{
    return {
        type :types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = (id) =>{
    return dispatch => {
        return callApi(`product/${id}`,'DELETE' , null).then(res =>{
            dispatch(actDeleteProduct(id))
        })
    }
}

export const  actDeleteProduct = (id) =>{
    return {
        type : types.DELETE_PRODUCTS,
        id
    }
}

export const actAddProductRequest = (product) => {
    return dispatch =>{
        return callApi('product' , 'POST' , product).then(res =>{
            dispatch(actAddProduct(product));
        });
    }
}
export const actAddProduct = (product) =>{
    return {
        type :types.ADD_PRODUCTS,
        product
    }
}
export const actGetProductRequest = (id) => {
    return dispatch =>{
        return callApi(`product/${id}`, 'GET' , null).then(res =>{
            dispatch(actGetProduct(res.data))
        })
    }
}
export const actGetProduct = (product) =>{
    return {
        type : types.EDITING_PRODUCT ,
        product
    }
} 
export const actUpdateProductRequest = (product) =>{
    return dispatch => {
        return callApi(`product/${product.id}` ,'PUT', product).then(res=>{
            dispatch(actUpdateProduct(res.data))
        });
    }
}
export const actUpdateProduct = (product) =>{
    return {
        type :types.UPDATE_PRODUCTS,
        product
    }
}
