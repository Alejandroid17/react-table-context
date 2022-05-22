import { useMemo } from "react";
import { useRowSelect, useTable } from "react-table";
import AddButton from "./components/button-add.jsx";
import ClearButton from "./components/button-clear.jsx";
import IndeterminateCheckbox from "./components/indeterminate-checkbox.jsx";
import RandomImage from "./components/random-image.jsx";
import Scope from "./components/scope.jsx";
import ContextTable from "./components/table-context.jsx";
import TableInformation from "./components/table-information.jsx";
import ReactTableContextProvider from "./provider.jsx";

function App() {
  const defaultTableOptions = {
    columns: [
      {
        Header: "First name",
        accessor: "firstName",
      },
      {
        Header: "Last name",
        accessor: "lastName",
      },
      {
        Header: "Age",
        accessor: "age",
      },
    ],
    data: [],
  };

  const tableConfiguration = [
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    },
  ];

  return (
    <ReactTableContextProvider
      defaultTableOptions={defaultTableOptions}
      tableConfiguration={tableConfiguration}
    >
      <Scope
        title="Table context provider (provider.jsx)"
        textColorClass="text-cyan-600"
        borderColorClass="border-cyan-600"
      >
        <div>
          <header className="flex items-center justify-between w-full max-w-4xl px-2 mx-auto my-4">
            <div>React table context</div>
            <a
              className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
              href="https://github.com/Alejandroid17/react-table-context"
            >
              Github Code
            </a>
          </header>
          <section className="grid grid-cols-4 gap-4">
            <div>
              <Scope
                title="Button (button-add.jsx) outside of table component"
                textColorClass="text-orange-600"
                borderColorClass="border-orange-600"
              >
                <AddButton />
              </Scope>
            </div>
            <div>
              <Scope
                title="Button (button-clear.jsx) outside of table component"
                textColorClass="text-orange-600"
                borderColorClass="border-orange-600"
              >
                <ClearButton />
              </Scope>
            </div>
            <div className="col-span-2">
              <Scope
                title="TableInformation (table-information.jsx) outside of table component"
                textColorClass="text-orange-600"
                borderColorClass="border-orange-600"
              >
                <TableInformation />
              </Scope>
            </div>
          </section>
          <section className="mx-5 mt-10">
            <h1 className="mb-10"> Random image</h1>
            <RandomImage />
          </section>
          <section className="mx-5 mt-10">
            <h1 className="mb-5"> Table (using context) </h1>
            <Scope
              title="Table component (table-context.jsx)"
              textColorClass="text-green-600"
              borderColorClass="border-green-600"
            >
              <ContextTable />
            </Scope>
          </section>
        </div>
      </Scope>
    </ReactTableContextProvider>
  );
}

export default App;
