import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItems: () => {},
    deleteItems : () => {},
});

const todoItemsReducer = (currentTodoItems, action) => {
    let newTodoItems = currentTodoItems;
    if(action.type == "NEW_ITEM"){
      newTodoItems = [...currentTodoItems, {name: action.payload.todoName, date: action.payload.todoDate || (new Date()).toLocaleDateString(),}]
    }else if(action.type == "DELETE_ITEM"){
      newTodoItems = newTodoItems.filter(item => item.name !== action.payload.name)
    }
    return newTodoItems;
}

const TodoItemsContextProvider = ({children}) => {
    
    const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, [])

    const addNewItems = (todoName, todoDate) => {

    const newItemAction  = {
      type: "NEW_ITEM",
      payload : {
        todoName: todoName,
        todoDate : todoDate,
      }
    };
    dispatchTodoItems(newItemAction)
    }  
    const deleteItems = (name) => {
    const deleteItemAction = {
        type : "DELETE_ITEM",
        payload : {
        name: name,
        }
    }
    dispatchTodoItems(deleteItemAction)
    }
    return(
        <TodoItemsContext.Provider value={{
            todoItems: todoItems,
            addNewItems: addNewItems,
            deleteItems : deleteItems,
        }}> 
        {children}
        </TodoItemsContext.Provider>
    )
}   
export default TodoItemsContextProvider;