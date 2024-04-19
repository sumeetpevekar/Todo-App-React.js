import { useContext } from "react";
import { TodoItemsContext } from "../store/ToDoItems-store";
import styles from "./Item.module.css"
import { MdDelete } from "react-icons/md";

const Item = ({item}) => {
  const {deleteItems} = useContext(TodoItemsContext)
    // console.log(item)
    return(
        <div className={`${styles.container}`}>
         <p>{item.name}</p>
         <p>{item.date}</p>
        <button type="button" className={`${styles.removeBtn} btn btn-danger`} onClick={() => deleteItems(item.name)}>Remove</button>
        <button type="button" className={`${styles.removeBtnIcon} btn btn-danger`} onClick={() => deleteItems(item.name)}><MdDelete /></button>
      </div>
    )
}
export default  Item;