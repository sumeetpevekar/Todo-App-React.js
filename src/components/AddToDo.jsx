import { useContext, useRef} from "react";
import styles from "./AddToDo.module.css"
import { TodoItemsContext } from "../store/ToDoItems-store";
const AddToDo = () => {

    const {addNewItems}  = useContext(TodoItemsContext)
    const todoNameElement = useRef()
    const todoDateElement = useRef()

    
    const handleNewItem = (event) => {
        event.preventDefault();
        const todoNameValue = todoNameElement.current.value;
        const todoDateValue = todoDateElement.current.value;
        // console.log(todoNameElement.current.value, todoDateElement.current.value)
        addNewItems(todoNameValue, todoDateValue)
        todoNameElement.current.value = ''
        todoDateElement.current.value = ''
        
    }
     return (
        <form className={`${styles.rowContainer} row`} onSubmit={handleNewItem}>
            <div className="col-4">
                <input type="text" ref={todoNameElement} placeholder="Enter Todo here"/>
            </div>
            <div className="col-4">
                <input type="date" ref={todoDateElement} />
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-success" onSubmit={(e) => {addNewItems(); handleNewItem()}}>Add</button>
            </div>
      </form>
    )
}
export default AddToDo;