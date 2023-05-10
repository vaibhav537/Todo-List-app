import React from "react";

const ToDolist = ({ text, id, onSelect }) => {
  return (
    <>
      <div className="flex w-[20rem] ml-[3rem] text-2xl">
        <span
          className="mx-5 flex items-center justify-center"
          onClick={() => {
            onSelect(id);
          }}
        >
          <i className="hover:text-red-600 cursor-pointer transition-all duration-500 fa-solid fa-circle-xmark"></i>
        </span>
        <li className="text-2xl">{text}</li>
      </div>
    </>
  );
};

export default ToDolist;
