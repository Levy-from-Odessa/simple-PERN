import {FETCH_RESTUARANTS_FAILURE, FETCH_RESTUARANTS_SUCCESS ,LOADING} from './restuarantTypes'

// !STATE
const initialState = {
  restuarants: [],
  error:'',
  loading:true
}


// !MUTATIONS
const restuarantsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_RESTUARANTS_SUCCESS:
      return{
        restuarants: [ ...payload],
        error: '',
        loading:false
      }
    case FETCH_RESTUARANTS_FAILURE: 
      return {
        restuarants:[],
        error: payload,
        loading:false
      }
    case LOADING:
        return{
          ...state,
          loading:true
        }
     
    default:
        return state
  }
};
export default restuarantsReducer