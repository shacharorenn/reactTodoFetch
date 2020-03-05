import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default function TodoItem(props){
    return(
        <div>
             <li class="list-group-item">
                <h5>{props.title}</h5>
                <p>{props.description}</p>
             </li>
        </div>
    )
}