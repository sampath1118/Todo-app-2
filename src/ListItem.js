import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const ListItem = (props) => {
  const [line, setLine] = useState(false);

  const cutItem = () => {
    setLine(true);
  };
  return (
    <>
      <div className="list_style">
        <span onClick={cutItem}>
          <DeleteIcon className="deleteIcon" />
        </span>
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {props.text}
        </li>
      </div>
    </>
  );
};

export default ListItem;
