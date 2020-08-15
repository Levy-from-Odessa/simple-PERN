import React from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {fetchDeleteRestuarant} from '../reducers/restuarant/restuarantActions'

const RestuarantRow = ({restuarants}) => {
    const dispach = useDispatch()//make async request to store
    const history = useHistory()//make link (instead <Link/>)


   
    return (
        <>
            {restuarants
                && restuarants.map ((restuarant)=> (
                   
                        <tr key={restuarant.id} >
                             
                            <td onClick={() => history.push(`/restuarants/${restuarant.id}`)}
                                style={{fontWeight: 'bold', fontSize:"24px", cursor:"pointer"}}>
                                {restuarant.name}
                                </td>
                            <td>{restuarant.location}</td>
                            <td>{'$'.repeat(price_range)}</td>
                            <td>Rating</td>
                            <td>
                                <button className="btn btn-warning"
                                         onClick={() => history.push(`/restuarants/${restuarant.id}/update`)}
                                        >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-danger"
                                        // make request to store 
                                        // send to db which restuarant need to del by it id
                                        onClick={() => dispach(fetchDeleteRestuarant(restuarant.id))}>
                                    Delete
                                    </button>
                            </td>
                            
                        </tr>
                    
                    ))
                    }
                   
        </>
    );
}

export default RestuarantRow;
