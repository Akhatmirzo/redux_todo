import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

export default function Update() {
  const param = useParams();
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id == param.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: user.name,
    email: user.email,
  });

  const handleInputValue = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: param.id, ...inputs }));
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              defaultValue={inputs.name}
              className="form-control"
              onChange={handleInputValue}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              defaultValue={inputs.email}
              className="form-control"
              onChange={handleInputValue}
            />
          </div>
          <br />

          <button className="btn btn-info">Update</button>
          <Link to={"/"} className="btn btn-warning ms-2">
            Cansel
          </Link>
        </form>
      </div>
    </div>
  );
}
