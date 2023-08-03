import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main.jsx";
import EditTask from "./components/EditTask/EditTask.jsx";
import AllTask from "./components/AllTask/AllTask.jsx";
import AddTask from "./components/AddTask/AddTask.jsx";
import Home from "./components/Home/Home.jsx";
import PendingTasks from "./components/PendingTask/PendingTasks.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <PendingTasks></PendingTasks>,
        loader: () => fetch("http://localhost:5000/pendingtask"),
      },
      {
        path: "allTasks",
        element: <AllTask></AllTask>,
        loader: () => fetch("http://localhost:5000/alltasks"),
      },
      {
        path: "editTask/:id",
        element: <EditTask></EditTask>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/editTask/${params.id}`),
      },
      {
        path: "addTask",
        element: <AddTask></AddTask>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-7xl mx-auto ">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
