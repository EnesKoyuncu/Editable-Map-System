import { createContext, useContext } from "react";

const MainContext = createContext({}); // createContext fonksiyonuna hiçbir argüman geçmiyoruz

export { MainContext, useContext };
