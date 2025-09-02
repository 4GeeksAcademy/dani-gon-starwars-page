import { createContext } from "react";

const a = {
    nombre:"Luke",
    id:"1",
    type: "people" //El tipo de elemento a guardar
}

export const FavoritesContext = createContext([a])

export const FavoritesProvider = () => {
   
}