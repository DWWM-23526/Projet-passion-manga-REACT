import { createContext } from "react";

//Création contexte
const ApiContext = createContext(
  {
    mangaService : {},
    mangakaService : {},
    tagService : {},
    favoriteService : {}
  }
);

export default ApiContext;