import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

import {fetchAddRestuarant, 
        fetchUpdateRestuarant} from '../reducers/restuarant/restuarantActions'


import Loader from '../UI/Loader/Loader';



// !component to create restuarant OR if data sent it would update 
const AddRestuarant = ({updateName, updateLocation, updatePriceRange, updateId}) => {
    const dispatch = useDispatch()//to make asunc request to store
    const history = useHistory()//to make a link (instead <Link/>)
    
    const [restuarant, setRestuarant] = useState({
        name: '' ,
        location: '',
        price_range: '' 
    })

    const [loading, setLoading] = useState(true);

   


    useEffect(() => {
        // check if data was sent it would save a new data otherwise it would save empthy data
        setRestuarant(
            restuarant => ({
                ...restuarant,
                name: updateName ? updateName : ""  ,
                location: updateLocation ? updateLocation : "",
                price_range: updatePriceRange ? updatePriceRange : '',
                
                })
           
        )
        setLoading(false)
        
       
    }, [updateName, updateLocation, updatePriceRange]);


    // set (obj) restuarant by using tags targets
    const handleInputChange = target =>{ 
        const {name, value} = target
        setRestuarant({...restuarant, [name]: value})
        
    }

    //make async request to store by dispatch 
    // post to db new data and update store
    const postData = e => {
        e.preventDefault()
        dispatch(fetchAddRestuarant(restuarant))
        setRestuarant({
            ...restuarant,
            name: '',
            location: '',
            price_range: 1,
            update: false
        })
    }

    //make async request to store by dispatch 
    // update restuarnat in db with id 
    const updateData = e => {
        
        e.preventDefault()
        dispatch(fetchUpdateRestuarant({restuarant, id: updateId}))
        setRestuarant({
            ...restuarant,
            name: '',
            location: '',
            price_range: 1
        })
        history.push('/')
    }
   
    return (
        <div className="mb-4">
            <form >
                
                    {loading 
                        ? <Loader/>
                        
                        : <div className="form-row">
                            <div className="col">
                                <input type="text" 
                                    name="name"
                                    require='true'
                                    className="form-control" 
                                    placeholder={restuarant.name}
                                    value={restuarant.name}
                                    onChange={(e) => handleInputChange(e.target)}/>
                            </div>
                            <div className="col">
                                <input type="text" 
                                    name="location"
                                    require='true'
                                    className="form-control" 
                                    placeholder={restuarant.location}
                                    value={restuarant.location}
                                    onChange={(e) => handleInputChange(e.target)}/>
                            </div>
                            <div className="col">
                                <select className="custum-select my-1 mr-sm-2"
                                        name="price_range"
                                        require='true'
                                        onChange={(e) => handleInputChange(e.target)}
                                        value={restuarant.price}
                                    >
                                    <option value="" disabled>Price Range</option>
                                    <option value={1}>$</option>
                                    <option value={2}>$$</option>
                                    <option value={3}>$$$</option>
                                    <option value={4}>$$$$</option>
                                    <option value={5}>$$$$$</option>
                                </select>
                            </div>
                            <button className="btn btn-primary"
                                    onClick={(e)=> updateId ? updateData(e) : postData(e)}
                                    >
                                        {updateId ? 'UPDATE' : 'ADD'}
                            </button>
                        </div>
                        }


               
            </form>
            
        </div>
    );
}

export default AddRestuarant;
