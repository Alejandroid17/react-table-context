import { useContext } from "react";
import ReactTableContext from "../context";

const ClearButton = () => {
  const tableContext = useContext(ReactTableContext);
  const { dispatch } = tableContext;

  return (
    <button
      onClick={() => {
        dispatch({ type: "CLEAR" });
      }}
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
    >
      Clear
    </button>
  );
};

export default ClearButton;
