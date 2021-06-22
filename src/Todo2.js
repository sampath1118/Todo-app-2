import React, { useState } from "react";
import ListItem from "./ListItem";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const Todo2 = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const showItems = () => {
    setNewItem((prevalue) => {
      return [...prevalue, item];
    });
    setItem("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1 className="h11">todo list</h1>
          <input
            type="text"
            value={item}
            className="input1"
            placeholder="please enter items"
            onChange={itemEvent}
          />
          <Button className="btn1" onClick={showItems}>
            <AddCircleIcon className="icon1" />
          </Button>
          <ul>
            {newItem.map((val) => {
              return <ListItem text={val} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo2;
