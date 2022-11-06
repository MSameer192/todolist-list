import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const addList = () => {
    setList([...list, value]);
    setValue("");
  };

  const onDelete = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <form
      className="container"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <InputArea value={value} addList={addList} setValue={setValue} />
      </div>

      {list.map((item, index) => {
        const deletelist = () => {
          onDelete(index);
        };

        return (
          <TodoItem
            key={index}
            item={item}
            mydelete={() => {
              deletelist(index);
            }}
          />
        );
      })}
    </form>
  );
}

export default App;
