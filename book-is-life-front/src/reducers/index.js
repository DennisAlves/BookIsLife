import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import cliente from "./cliente";
import estoque from "./estoque";
import vendas from "./vendas";

export const generateReducers = history =>
    combineReducers({
        router: connectRouter(history),
        cliente,estoque,vendas,
        // Outros reducers aqui
    });