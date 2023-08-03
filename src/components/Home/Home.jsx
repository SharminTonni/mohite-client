import React from "react";
import AddTask from "../AddTask/AddTask";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <header className="bg-slate-200 text-center py-5 flex items-center justify-center">
        <img
          className="w-16 h-16 mr-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxbm-dj8lgt5hmczamqhjmYA7a8nnETHV9mw&usqp=CAU"
          alt=""
        />
        <h2 className="font-serif font-bold text-4xl"> Task Manager</h2>
      </header>
    </div>
  );
};

export default Home;
