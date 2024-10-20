import { useState } from "react";
import { nanoid } from "nanoid";
import ListItem from "./ListItem"; // Assurez-vous que ListItem est bien importé

function App() {
  const [todoList, setTodoList] = useState([
    { id: nanoid(), content: "items 1" },
    { id: nanoid(), content: "items 2" },
    { id: nanoid(), content: "items 3" },
    { id: nanoid(), content: "items 4" }
  ]);

  // Fonction pour supprimer un todo
  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  const [todo, setTodo] = useState("")

  function handleSubmit(e){

    e.preventDefault()

    setTodoList([...todoList, {id:nanoid(),content:todo}])
    setTodo("")
  }

  return (
    <div className="h-screen bg-slate-900">
      <div className="max-w-4x1 mx-auto pt-20 px-6">
        <h1 className="text-3-1 text-slate-100">La to-do-List</h1>

        <form onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="todo-item" className="text-slate-50">
            Ajouter une chose à faire
          </label>

          <input value={todo} onChange={e => setTodo(e.target.value)} type="text" className="mt-1 block w-full rounded" />

          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">
            Ajouter
          </button>
        </form>

        <ul>
          {todoList.length === 0 && (<li className="texte-slade-50 text-emerald-50">Pas d'items à afficher...</li>)}
         
          {todoList.length > 0 && todoList.map((item) => (
            <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
