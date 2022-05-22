import { useReducer } from "react";
import { useTable } from "react-table";
import ReactTableContext from "./context";
import ReactTableReducer from "./reducer";

const ReactTableContextProvider = ({
  children,
  defaultTableOptions,
  tableConfiguration = [],
}) => {
  const [state, dispatch] = useReducer(ReactTableReducer, defaultTableOptions);
  const tableInstance = useTable({ ...state }, ...tableConfiguration);

  return (
    <ReactTableContext.Provider value={{ ...tableInstance, dispatch }}>
      {children}
    </ReactTableContext.Provider>
  );
};

export default ReactTableContextProvider;
