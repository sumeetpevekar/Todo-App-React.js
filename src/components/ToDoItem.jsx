import { useContext } from "react";
import { TodoItemsContext } from "../store/ToDoItems-store";
import Item from "./Item";
const ToDoItem = () => {
  // console.log(todoItems);
  const {todoItems} = useContext(TodoItemsContext)
  console.log(todoItems)
    return (
      <>
        {todoItems.map((item, index) => <Item key={index} item={item} ></Item>)}
      </>
    )
}
export default ToDoItem;