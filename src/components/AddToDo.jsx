import { useContext, useRef} from "react";
import styles from "./AddToDo.module.css"
import { TodoItemsContext } from "../store/ToDoItems-store";
import { MdAddTask } from "react-icons/md";
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
        <form className={styles.rowContainer} onSubmit={handleNewItem}>
                <input className={styles.input} type="text" ref={todoNameElement} placeholder="Enter Todo here"/>
                <input className={styles.input} type="date" ref={todoDateElement} />
                <button type="submit" className={`${styles.addBtn} btn btn-success`} onSubmit={(e) => {addNewItems(); handleNewItem()}}>Add</button>
                <button type="submit" className={`${styles.addBtnIcon} btn btn-success`} onSubmit={(e) => {addNewItems(); handleNewItem()}}><MdAddTask /></button>
      </form>
    )
}
export default AddToDo;