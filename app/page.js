"use client"; // this is a client component 👈🏽
import ToDolist from "@/components/ToDolist";
import React from "react";
import { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);

  const itemEvents = (event) => {
    setTodo(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, todo];
    });
    setTodo("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index)=>{
        return index !== id;

      })
    })
  };
  return (
    <div className="bg-indigo-300 h-screen w-screen flex select-none items-center justify-center">
      <div className="bg-white shadow-2xl rounded-lg w-[30rem] h-[40rem]">
        <h1 className="bg-purple-500  py-2 shadow-2xl text-5xl px-3 text-center   text-white font-bold mt-10">
          ToDo List
        </h1>
        <div className="p-3">
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Add a Item"
              className="my-10 border-b-4 py-2 text-xl placeholder:text-xl  border-purple-500 outline-none text-center"
              onChange={itemEvents}
              value={todo}
            />
            <button
              onClick={listOfItems}
              className="flex items-center justify-center bg-purple-500 h-10 w-10 ml-5 shadow-2xl hover:bg-green-400 transition-all duration-500  rounded-full text-3xl text-white"
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <ol className="flex flex-col items-center justify-center text-lg text-purple-400 mt-5 mb-10">
            {items.map((val, index) => {
              return (
                <ToDolist
                  key={index}
                  id={index}
                  text={val}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
