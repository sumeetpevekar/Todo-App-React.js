import { useContext } from "react";
import { TodoItemsContext } from "../store/ToDoItems-store";
import styles from "./Item.module.css"

const Item = ({item}) => {
  const {deleteItems} = useContext(TodoItemsContext)
    // console.log(item)
    return(
        <>
        <div className="container">
      <div className={`${styles.container} row`}  style={{"display" : "flex", "alignItems": "center"}}>
        <div className="col-4">
         <p>{item.name}</p>
        </div>
        <div className="col-4">
         <p>{item.date}</p>
          </div>
        <div className="col-2">
        <button type="button" className="btn btn-danger" onClick={() => deleteItems(item.name)}>Remove</button>
        </div>
      </div>
      </div>
        </>
    )
}
export default  Item;