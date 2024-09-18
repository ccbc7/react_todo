import { useState } from "react";
import { InputTodo } from "./components/inputTodo";
import { IncompeteTodo } from "./components/inCompleteTodo";
import { CompleteTodo } from "./components/completeTodo";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");

  const [incompeteTodos, setIncompleteTodos] = useState([
    "Todoです1",
    "Todoです2",
  ]);

  const [completeTodos, setCompleteTodos] = useState(["完了1", "完了2"]);

  const onChangeTodoText = (e) => {
    return setTodoText(e.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompeteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    // 新しい配列を用意しないと、更新を判定してくれない
    const newTodos = [...incompeteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    // 指定の要素を取り出す
    const Todo = incompeteTodos[index];

    // 要素を完了リストに追加
    const newCompleteTodos = [...completeTodos, Todo];
    setCompleteTodos(newCompleteTodos);

    // 未完了リストから要素を削除
    const newIncompleteTodos = [...incompeteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickReturn = (index) => {
    // 指定の要素を未完了リストに戻す
    const Todo = completeTodos[index];
    const newIncompleteTodos = [...incompeteTodos, Todo];
    setIncompleteTodos(newIncompleteTodos);

    // 完了リストから要素を消す
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  };

  const isLimitIncompleteTodos = incompeteTodos.length >= 5;

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isLimitIncompleteTodos}
      />
      {isLimitIncompleteTodos && <p style={{ color: "red" }}>上限は5個です</p>}
      <IncompeteTodo
        incompeteTodos={incompeteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </>
  );
};
