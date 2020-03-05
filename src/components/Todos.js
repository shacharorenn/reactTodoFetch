import React,{useEffect,useState} from 'react';
import TodoItem from './TodoItem'

export default function Todos(){
    const [todosState, setTodosState] = useState([]);



    useEffect (()=>{
        fetch("https://nztodo.herokuapp.com/api/task/?format=json")
        .then(respone => respone.json())
        .then(tasks => setTodosState(tasks))
    },[])

    return(
        todosState.map (item => (
            <ul class="list-group">
                <TodoItem title ={item.title} description={item.description} />
            </ul>
        ))
    )
}


//export default class Todos extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         items: []
    //     }
    // }

    // componentDidMount() {
    //     fetch("https://nztodo.herokuapp.com/api/task/?format=json")
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             this.setState ({
    //                 items: result
    //             });
    //             console.log(this.state.items);
    //         },
    //         (error) =>{
    //             console.log(error);
    //         }
    //     )
    // }

    // render() {
    //     return(
    //          <ul>
    //              {this.state.items.map (item => (
    //                 <TodoItem title ={item.title} description={item.description} />
    //             ))}
    //         </ul>
    //     );
    // }
//}