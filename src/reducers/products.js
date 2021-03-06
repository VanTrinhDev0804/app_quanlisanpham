import * as types from '../constants/ActionTypes' 
var initialState =[]

var findIndex = (arrays , id)=>{
    var result =-1
    arrays.forEach((array , index) => {
        if(array.id ===id){
            result =index
        }
    });
    return result;
}
const products = (state = initialState , action) =>{
    var index = -1;
    var { id, product } = action;
    switch(action.type){
        case types.FETCH_PRODUCTS:
            state = action.products
            return [...state];
        case types.DELETE_PRODUCTS:
            index = findIndex(state , id)
            state.splice(index , 1);        
            return [...state];
        case types.ADD_PRODUCTS:
            state.push(action.product)
            return [...state]
        case types.UPDATE_PRODUCTS:
            index = findIndex(state , product.id)
            state[index] = product;
            return [...state]
        default : return [...state];
    }
};

export default  products;