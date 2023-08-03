import { data } from "autoprefixer";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddTask = () => {
  const navigate = useNavigate();
  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const status = form.status.value;
    console.log(title, description, status);
    const task = { title, description, status };
    console.log(task);

    // post new task
    fetch("http://localhost:5000/addTask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your task has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate("/allTasks");
        }
      });
  };
  return (
    <div className="mt-6 text-center">
      <div className="hero min-h-screen bg-slate-200">
        <div className="hero-content flex-col">
          <div className="text-center font-serif  lg:text-left">
            <h1 className="text-5xl font-bold">Add Your Task</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleAddTask} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Task Title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task Description</span>
                </label>
                <textarea
                  name="description"
                  id=""
                  cols="30"
                  rows="10"
                  className="input input-bordered"
                  required
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task Status</span>
                </label>
                <select name="status" id="" required>
                  <option value="pending">Pending</option>
                  <option value="done">Done</option>
                </select>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-orange-700 hover:bg-orange-800 text-white"
                  type="submit"
                  value="Add Task"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
