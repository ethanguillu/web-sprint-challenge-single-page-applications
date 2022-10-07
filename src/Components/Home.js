import React from "react";
import {Link, useHistory} from 'react-router-dom'



export default function Home () {
    
    const history = useHistory();

    return (
        <div>
            <Link to='/pizza'>
                <button id='order-pizza' onClick={() => history.push('/pizza')}>Order Later?</button>
            </Link>
        </div>
    )
}