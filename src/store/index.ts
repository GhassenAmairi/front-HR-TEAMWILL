import { createStore } from "vuex";
import { RootState } from "@/store/interfaces";


import root from "./modules/root";


export const store = createStore<RootState>(root);

