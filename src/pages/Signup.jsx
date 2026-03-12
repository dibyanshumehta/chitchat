import React from "react";
import LogoImg from "../assets/logo.png";

const Signup = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row vh-100 d-flex align-items-center justify-content-center">
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <img src={LogoImg} alt="Logo" className="mb-4 rounded-circle" style={{ width: "200px" }} />    
                <h2 className="mb-4">Create Your Account</h2>
                <form style={{ width: "100%", maxWidth: "400px" }}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="username" className="form-control" id="username" placeholder="Enter your username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                    </div>
                    <p>Forget your password?</p>
                    <button type="submit" className="btn btn-primary w-50">Sign Up</button>
                </form>
            </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
