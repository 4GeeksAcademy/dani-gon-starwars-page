export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    favorites:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
      case"handle_favorites":
      let newFavorites = []
      if (store.favorites.includes(action.payload)){
        newFavorites=store.favorites.filter(fav=>fav!=action.payload)
      } else{
        newFavorites=[...store.favorites, action.payload]
      }
      return{
        ...store, 
        favorites:newFavorites
      }
    default:
      throw Error('Unknown action.');
  }    
}
