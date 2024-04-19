import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItems: () => {},
    deleteItems : () => {},
});

const todoItemsReducer = (currentTodoItems, action) => {
    let newTodoItems = currentTodoItems;
    let currentDate = new Date();
    let currYear = currentDate.getFullYear();
    let currMonth = currentDate.getMonth() + 1;
    currMonth = currMonth < 10 ? '0' + currMonth : currMonth;
    let currDay = currentDate.getDate();
    if(action.type == "NEW_ITEM"){
      newTodoItems = [...currentTodoItems, {name: action.payload.todoName, date: action.payload.todoDate || `${currYear}-${currMonth}-${currDay}`}]
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