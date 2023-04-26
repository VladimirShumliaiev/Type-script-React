
interface Todos {
    title: string,
    completed: boolean
}


type ToggleTodo = (selectedTodo: Todos) => void

type AddTodo = (title: string) => void