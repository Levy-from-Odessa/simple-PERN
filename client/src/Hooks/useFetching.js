import  {useDispatch} from 'react-redux'
import {useEffect} from 'react'

// ! hook that send a req if it nessecery by monitoring changing
export  const useFetching = (fetch, creditals) => {
    const dispatch = useDispatch()
    useEffect(() =>{
        
        dispatch(fetch(creditals))

    }, [dispatch, fetch, creditals])
}