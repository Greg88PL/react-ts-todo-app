import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text"></label>
      <input id="text" type="text" ref={todoTextInputRef} />
      <button>Add New Todo</button>
    </form>
  );
};

export default NewTodo;
