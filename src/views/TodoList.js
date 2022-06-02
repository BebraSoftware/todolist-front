import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import TodoItem from '../components/TodoItem';

const TodoList = () => {
  //#2 Used to get a single attribute or object inside the Reducer

  //Get todoList from todoReducer
  const todoList = useSelector(state => state.todos.todoList);

  //Use for all the dispatch actions
  const dispatch = useDispatch();

  //Local state for the input
  const [inputTodo,setInputTodo] =  useState('');
  //Local state for the input error message
  const [errMsg,setErrMsg] = useState('');
  
  //Handle onChange event
  const handleInput = (e)=>{
    setInputTodo(e.target.value);
  }
  // eslint-disable-next-line
  const url = 'https://localhost:5001/api/Task';
  const data = {
      "username":"Dimas",
      "taskname":"Srat",
      "iscompleted":false,
      "isimportant":true
  };

   function addItem() {

       fetch('https://localhost:5001/api/Task', {
           method: 'post',
           mode: 'no-cors',
           headers: {
               'Accept': 'application/json, text/plain, */*',
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       }).then(res => res.json())
           .then(res => console.log(res));
   }

  //Handle onClick event
  const addNewTodo = ()=>{
    //Valid input value
    if(inputTodo.trim().length>1)
    {   
        setErrMsg('');
        let newTodoObject={
            id: Math.random(),
            content:inputTodo
        }
         //Add new todo item into List with the action
        dispatch({type:'ADD_TODO',payload:newTodoObject});
        //Empty input 
        setInputTodo('');
        console.log(data);
        addItem();
    }
    else{
        //Display Error message
        setErrMsg('');
    }


  }

    return (
        <section id="section-todo">

        <span className="menu animate__animated animate__fadeInLeft">
            <span className="menu_inner">
                <span className="profile">
                    <span className="profile_pic"><img  className="avatar" src="bang.jpg" alt=""/></span>
                    <span className="profile_name text"><p>NAME</p></span>
                    <span className="profile_lastname text"><p>LASTNAME</p></span>
                    <span className="profile_line"></span>
                    <span className="profile_sex">MALE</span>
                </span>

                <span className="quit">
                        <span className="quit_inner">
                            <a className="quit_butt" href="login.html">QUIT</a>
                    </span>
                </span>
            </span>
        </span>
        {
            todoList.length>0?
            (<ul className="collection animate__animated animate__fadeInDown">
            {
              todoList.map(item => {
                return  <TodoItem key={item.id} item={item} />
              })
            }
          </ul>):
          (<p className="nothing animate__animated animate__fadeInDown">You don't have anything to do! Awesome!</p>)
        }

        <p className="input_smth">
        {errMsg}
        </p>
        <div className="row animate__animated animate__fadeInUp">
            <div className="new_task_name">
            <input onChange={handleInput} value={inputTodo} className="new_task_input" placeholder="New Task" id="todo-input" type="text" />
            </div>
            <div className="task_plus" onClick={addNewTodo} ></div>
        </div>
      </section>
      );
}
 
export default TodoList;
