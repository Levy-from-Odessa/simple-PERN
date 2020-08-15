
import {FETCH_RESTUARANTS_SUCCESS, FETCH_RESTUARANTS_FAILURE, LOADING} from './restuarantTypes'
import RestuarantService from '../../services/RestuarantService'

// !ACTIONS


// send get req to get all res from db and set it in store
export const fenchRestuarants = () => {
    return async(dispatch)=> {
        try {
            const response = (await RestuarantService.restuarants()).data
            dispatch(fetchRestuarantsSuccess(response))
        } catch (error) {
            dispatch(fetchRestuarantsFailure(error))
        }
    }
}

// send post req to add new restuarant to db with payload (obj)
// and update (get all restuarants from db) 
export const fetchAddRestuarant = restuarant => {
    return async(dispatch)=> {
        try {
          dispatch(loading())
            await RestuarantService.postRestuarant(restuarant)
            dispatch(fenchRestuarants())
        } catch (error) {
            dispatch(fetchRestuarantsFailure(error))
        }
    }
  }

// send get req to get restuarnt bu id
// and update (get all restuarants from db) 
  export const fetchFindRestuarant = restuarantId => {
    return async(dispatch)=> {
        try {
          dispatch(loading())
            await RestuarantService.findRestuarant(restuarantId)
            dispatch(fenchRestuarants())
        } catch (error) {
            dispatch(fetchRestuarantsFailure(error))
        }
    }
  }

// send post req to del restuarant by id 
// and update (get all restuarants from db) 
  export const fetchDeleteRestuarant = restaurantId => {
    return async(dispatch)=> {
        try {
          dispatch(loading())
            await RestuarantService.deleteRestuarant(restaurantId)
            dispatch(fenchRestuarants())
        } catch (error) {
            dispatch(fetchRestuarantsFailure(error))
        }
    }
  }

// send update req to update restuaran by id and payload 
// and update (get all restuarants from db) 


  export const fetchUpdateRestuarant = data => {
    return async(dispatch)=> {
        try {
          dispatch(loading())
            await RestuarantService.updateRestuarant(data.restuarant, data.id)
            dispatch(fenchRestuarants())
        } catch (error) {
            dispatch(fetchRestuarantsFailure(error))
        }
    }
  }

// call action to set loading 
export const loading = () => {
    return {
      type: LOADING
    }
}

// if a get(get all restuarant) req was succeed it would set a res data in store 
export const fetchRestuarantsSuccess = restuarants => {
    return {
      type: FETCH_RESTUARANTS_SUCCESS,
      payload: restuarants
    }
  }

// if a ANY of req wasnt succed it would recive a res error and sent in a store
export const fetchRestuarantsFailure = error => {
    return {
      type: FETCH_RESTUARANTS_FAILURE,
      payload: error
    }
  }
