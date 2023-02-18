import { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
function Login(){
    // let [Counter,setCounter]=useState(0);
    let [users,setUsers]= useState([]);
    let [user, setUser]= useState({});
    const getUsers=()=>{
        // fetch statment or axios for getting all users
    };
    const checkusers=useEffect(
        ()=>{
            getUsers();
        }
    );
    return(
        <>
          <Header/>
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={checkusers()}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
            {/* isa lw fe wa2t hb2a a3ml reset  password page form */}
          Forgot <a href="#">password?</a>
        </p>
      </form>
        </>
    );
}
export default Login;