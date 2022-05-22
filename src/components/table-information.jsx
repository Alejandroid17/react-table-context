import { useContext } from "react";
import ReactTableContext from "../context";

const TableInformation = () => {
  const tableContext = useContext(ReactTableContext);
  const {
    data,
    state: { selectedRowIds },
  } = tableContext;

  return (
    <pre className="p-2 overflow-auto bg-gray-200 max-h-44">
      <code>
        {JSON.stringify(
          {
            data,
            selectedRowIds: selectedRowIds,
          },
          null,
          2
        )}
      </code>
    </pre>
  );
};

export default TableInformation;
