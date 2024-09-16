import { useState } from "react";

export const Todo = () => {
  const[todoText, setTodoText] = useState("");
  const [incompeteTodos, setIncompleteTodos] = useState([
    "Todoです1",
    "Todoです2",
  ]);
  const [completeTodos, setCompleteTodos] = useState(["完了1", "完了2"]);

  const onChangeTodoText = (e) => {
    return setTodoText(e.target.value);
  }

  const onClickAdd = (params) => {
    if (todoText === "") return;
    const newTodos = [...incompeteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompeteTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
