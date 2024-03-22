import { useState } from "react";
import usePageTitle from "../utils/usePageTitle";
import axios from "axios";
import { toast } from "react-toastify";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({});
  usePageTitle("Register");
  const handleForm = (e) => {
    e.preventDefault();
    console.log(value);
    // sending data using axios
    axios
      .post("http://localhost:8080/api/v1/auth/register", value)
      .then(function (response) {
        console.log(response.data);
        if (response.data.success) {
          toast.success(response.data.message);
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        } else {
          toast.error(response.data.message);
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
            Registration Form
          </h1>
          <form onSubmit={handleForm}>
            <div className="row">
              <div className="col-md-4 mb-3 mx-auto">
                <label htmlFor="fName" className="form-label">
                  Full Name
                </label>
                <input
                  required
                  name="fName"
                  type="text"
                  id="fName"
                  className="form-control"
                  onChange={handleInput}
                  value={value.fName || ""}
                />
              </div>
              <div className="w-100"></div>
              <div className="col-md-4 mb-3 mx-auto">
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
              <div className="col-md-4 mb-3 mx-auto">
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
              <div className="col-md-4 mb-3 mx-auto">
                <label htmlFor="answer" className="form-label">
                  What is your best friend name?
                </label>
                <input
                  required
                  name="answer"
                  type="text"
                  id="answer"
                  className="form-control"
                  onChange={handleInput}
                  value={value.answer || ""}
                />
              </div>
              <div className="w-100"></div>
              <div className="col-md-4 mb-3 mx-auto">
                <button className="btn btn-primary" type="submit">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;
