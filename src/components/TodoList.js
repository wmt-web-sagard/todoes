import { useEffect, useState } from "react";

const TodoList = () => {
  const [listTodo, setlistTodo] = useState(["Default Task"]);

  const [TextTodo, setTextTodo] = useState("");


  const formatedTodo =
    listTodo.length >= 1 ? (
      listTodo.map((todo, index) => {
        return (
          <tr key={index}>
            <td>{todo}</td>
            <td>&nbsp;</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={(todo) => {
                  listTodo.shift(index);

                  setlistTodo((prev) => {
                    return [...listTodo];
                  });
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td colSpan={3}> No Todo </td>
      </tr>
    );

  return (
    <>
      <div>
        <h1 className="text-white bg-dark ps-2 mb-0 pb-3  text-start">
        Todoes Table
        </h1>
      </div>
      <table className="table table-dark mb-0 text-center">
        <thead>
          <tr>
            <th>Name Of Todoes</th>
            <th>Condition</th>
            <th>Remove Todo</th>
          </tr>
        </thead>
        <tbody>{formatedTodo}</tbody>
        <tfoot>
          <tr>
            <td>
              {" "}
              <button
                className="btn btn-danger"
                onClick={() => {
                  listTodo.shift();
                  setlistTodo((prev) => {
                    return [...listTodo];
                  });
                }}
              >
                Delete First Todo
              </button>
            </td>
            <td className="row">
              <div className="col">
                <input
                  type="text"
                  id="iptTodo"
                  className="form-control"
                  value={TextTodo}
                  onChange={(e) => {
                    setTextTodo(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="col">
              <button
              type="submit"
                className="btn btn-primary"
                onClick={() => {
                  if (TextTodo.trim() !== "") {
                    setlistTodo((prev) => {
                      return [...prev, TextTodo];
                    });

                    console.log(listTodo);
                  } else {
                    alert("fill input please");
                  }
                  setTextTodo("");
                }}
              >
                Submit
              </button>
              </div>
            </td>
            <td>
            <button
                  className="btn btn-danger"
                  onClick={() => {
                    listTodo.pop();
                    setlistTodo((prev) => {
                      return [...listTodo];
                    });
                  }}
                >
                  Delete Last Todo
                </button>
              
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
export default TodoList;
