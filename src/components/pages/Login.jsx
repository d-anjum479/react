import usePageTitle from "../utils/usePageTitle";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authValue } from "../../store/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState({});
  usePageTitle("Login");
  const handleForm = (e) => {
    e.preventDefault();
    console.log(value);
    // sending data using axios
    axios
      .post(`http://localhost:8080/api/v1/auth/login`, value)
      .then(function (response) {
        console.log(response.data);
        if (response.data.success) {
          toast.success(response.data.message, { autoClose: 1000 });
          dispatch(
            authValue({
              user: response.data.user,
              token: response.data.token,
            })
          );
          window.localStorage.setItem("auth", JSON.stringify(response.data));
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          toast.error(response.data.message, { autoClose: 1000 });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    setValue({});
  };
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValue((values) => ({ ...values, [name]: value }));
  };
  return (
    <>
      <Layout>
        <div className="container">
          <h1 className="text-center text-primary py-md-5 py-3 fw-semibold">
            Login Form
          </h1>
          <form onSubmit={handleForm}>
            <div className="row">
              <div className="col-lg-5 mb-3 mx-auto">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  id="email"
                  className="form-control"
                  onChange={handleInput}
                  value={value.email || ""}
                />
              </div>
              <div className="w-100"></div>
              <div className="col-lg-5 mb-3 mx-auto">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  required
                  name="password"
                  type="password"
                  id="password"
                  className="form-control"
                  onChange={handleInput}
                  value={value.password || ""}
                />
              </div>
              <div className="w-100"></div>
              <div className="col-lg-5 mb-3 mx-auto">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Login;
