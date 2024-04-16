import "bootstrap/dist/css/bootstrap.min.css"
import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import ToDoItem from "./components/ToDoItem"
import Container from "./components/Container"
import Message from "./components/Message"
import TodoItemsContextProvider from "./store/ToDoItems-store"



function App() {
  return (
      <TodoItemsContextProvider>
      <Container>
      <AppName></AppName>
      <AddToDo></AddToDo>
      <Message></Message>
      <ToDoItem ></ToDoItem>
      </Container>
      </TodoItemsContextProvider>
  )
}

export default App;
