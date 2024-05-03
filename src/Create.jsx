import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./UserReducer";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const handleInputValue = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({ id: users.length, email: inputs.email, name: inputs.name })
    );
    navigate("/")
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Create User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={handleInputValue}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={handleInputValue}
            />
          </div>
          <br />

          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}
