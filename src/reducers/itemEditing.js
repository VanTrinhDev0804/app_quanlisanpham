import * as types from '../constants/ActionTypes'

var initialState ={};

const itemEditing = (state = initialState , action) =>{
    switch(action.type){
        case types.EDITING_PRODUCT:
            console.log(action.product)
            return action.product
            
        default: return state
    }
}

export default itemEditing;