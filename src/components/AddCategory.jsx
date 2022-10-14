import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onHandleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    setInputValue("");
    onAddCategory(inputValue.trim());
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search Gifs"
          value={inputValue}
          onChange={onHandleChange}
        ></input>
      </form>
    </div>
  );
};
