import React from 'react'
import { Link } from 'react-router-dom'

function Button(props){
        return (
            <p className='pb-7 pt-7 text-center text-3xl font-bold'>
                <Link to={`/${props.name}`}>{props.name}</Link>
            </p>
        );
}
export default Button