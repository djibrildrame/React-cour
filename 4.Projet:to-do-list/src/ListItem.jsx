function ListItem({ itemData, deleteTodo }) {
    return (
      <li className="p-2 bg-zinc-200 mb-2 rounded flex">
        {/* Affiche le contenu du todo */}
        <span>{itemData.content}</span>
  
        {/* Bouton pour supprimer l'élément */}
        <button
          onClick={() => deleteTodo(itemData.id)}
          className="ml-auto bg-red-600 w-6 rounded text-zinc-200"
        >
          X
        </button>
      </li>
    );
  }
  
  export default ListItem;
  