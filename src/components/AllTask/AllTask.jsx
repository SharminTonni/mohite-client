import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaBeer, FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
const AllTask = () => {
  const allTasks = useLoaderData();
  const [tasks, setTasks] = useState(allTasks);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteTask/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your task has been deleted.", "success");

              const remaining = tasks.filter((tsk) => tsk._id !== id);
              setTasks(remaining);
            }
          });
      }
    });
  };

  const handleStatus = (id) => {
    fetch(`http://localhost:5000/editStatus/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "done" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Task is Done",
            showConfirmButton: false,
            timer: 1500,
          });
          const remaining = tasks.filter((task) => task._id !== id);
          const updatedTask = tasks.find((task) => task._id == id);
          updatedTask.status = "done";
          const newTasks = [updatedTask, ...remaining];
          setTasks(newTasks);
        }
      });
  };
  return (
    <div className="text-center mt-6">
      <h2 className="font-serif mb-4 font-bold text-3xl">All of Your Task</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Remove</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id} className="bg-base-200">
                <th>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="btn bg-red-500 text-white hover:bg-red-600 rounded-full"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </th>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>
                  <Link to={`/editTask/${task._id}`}>
                    <FaEdit></FaEdit>
                  </Link>
                </td>
                <td>
                  {task.status == "pending" ? (
                    <button
                      onClick={() => handleStatus(task._id)}
                      className="btn bg-orange-500 hover:bg-orange-700"
                    >
                      Completed ?
                    </button>
                  ) : (
                    <div className="flex items-center">
                      <button className="btn text-green-600 font-2xl bg-green-300">
                        <FaCheckCircle></FaCheckCircle> completed
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTask;
