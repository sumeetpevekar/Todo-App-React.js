import { useContext } from "react";
import { TodoItemsContext } from "../store/ToDoItems-store";

const Message = () => {
    const {todoItems} = useContext(TodoItemsContext)
    return (
        <>
        {todoItems.length == 0 && <h1>You are free today!</h1>}
        </>
    )
}
export default  Message;