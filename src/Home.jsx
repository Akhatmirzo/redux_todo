import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";

export default function Home() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const UserDelete = (id) => {
    const isConfirm = window.confirm("Are you sure you want to delete");

    if (isConfirm) {
      dispatch(deleteUser({ id }));
    }
  };

  return (
    <div className="container">
      <h2>Crud App JSon Server</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create +
      </Link>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{Number(user.id) + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit/${user.id}`} className="btn btn-warning">Edit</Link>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => UserDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
