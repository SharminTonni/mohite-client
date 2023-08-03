import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const PendingTasks = () => {
  const pendings = useLoaderData();
  console.log(pendings);
  return (
    <div className="text-center mt-6">
      <h2 className="font-serif mb-4 font-bold text-3xl">
        All of Your Pending Tasks
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {pendings.map((task, i) => (
              <tr key={task._id} className="bg-base-200">
                <th>{i + 1}</th>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingTasks;
