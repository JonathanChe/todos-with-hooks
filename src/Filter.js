import React from 'react';

const Filter = ({ filter, changeFilter }) => (
  <p>
    Current Filter:
    <br/>
    <span
      style={{
        fontWeight: filter === "ALL" ? "bold" : "normal"
      }}
      onClick={() => changeFilter({
        type: "SET_VISIBILITY_FILTER",
        filter: "ALL"
      })}
    >
      ALL
      <br/>
    </span>
    <span
      style={{ fontWeight: filter === "COMPLETED" ? "bold" : "normal" }}
      onClick={() =>
        changeFilter({
          type: "SET_VISIBILITY_FILTER",
          filter: "COMPLETED",
        })
      }
    >
      Completed
      <br/>
    </span>
    <span
      style={{ fontWeight: filter === "ACTIVE" ? "bold" : "normal" }}
      onClick={() =>
        changeFilter({
          type: "SET_VISIBILITY_FILTER",
          filter: "ACTIVE",
        })
      }
    >
      Active
    </span>
  </p>
);

export default Filter;
