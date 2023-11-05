import React from "react";
import "../style/login.css";
import useLoginForm from "../hooks/useLoginForm";
import pic1 from "../images/login.jpg";
const Login = () => {
  const { formData, errors, handleChange, handleSubmit } = useLoginForm();

  return (
    <div className="login-container">
      <div>
        <svg
          className="u-svg-content"
          viewBox="0 0 160 150"
          x="0px"
          y="0px"
          id="svg-93a1"
        >
          <path
            fill=" #6dadbf"
            d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
	c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
	c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
	C6.9,115.6,25.2,125.2,43.2,126.9z"
          ></path>
        </svg>

        <img className="login-img" src={pic1} />

        <div className="form-login">
          <h2>Log in</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                id="username"
                name="name"
                placeholder="User Name"
                value={formData.name}
                className="input-form-style input-from-style"
                onChange={handleChange}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                className="input-form-style input-from-style"
                onChange={handleChange}
              ></input>
            </div>

            {/* <div class="form-group">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                id="username"
                name="User Name"
                // inputName="name"
                value={formData.name}
                onError={errors.name}
                className="input-form-style input-from-style"
                onChange={handleChange}
              ></input>
            </div>

            <div class="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="Password"
                // inputName="password"
                value={formData.password}
                onError={errors.password}
                className="input-form-style input-from-style"
                onChange={handleChange}
              ></input>
            </div> */}
            <p>for admin permissions please contact me via email.</p>
            <button className="button btn-lgin" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
