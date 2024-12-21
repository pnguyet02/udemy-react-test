import { useState } from "react";
import { loginApi } from "../services/UserServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [loadingApi, setLoadingApi] = useState(false);
  const { loginContext } = useContext(UserContext);

  // useEffect(() => {
  //   let token = localStorage.getItem("token");
  //   if (token) {
  //     navigate("/");
  //   }
  // }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email/Password is required!");
      return;
    }
    setLoadingApi(true);
    let res = await loginApi(email.trim(), password);
    if (res && res.token) {
      loginContext(email, res.token);
      navigate("/");
    } else {
      //error
      if (res && res.status === 400) {
        toast.error(res.data.error);
      }
    }
    setLoadingApi(false);
    // console.log(">>>check: ", res);
  };
  const handleGoBack = () => {
    navigate("/");
  };
  const handlePressEnter = (event) => {
    if (event && event.key === "Enter") {
      handleLogin();
    }
  };
  return (
    <>
      <div className="login-container col-12 col-sm-4">
        <div className="title">Login</div>
        <div className="text">Email or username (george.bluth@reqres.in)</div>
        <input
          type="text"
          placeholder="Email or username..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="input-2">
          <input
            type={isShowPassword ? "text" : "password"}
            placeholder="Password..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(even) => handlePressEnter(event)}
          />
          <i
            className={
              isShowPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
            }
            onClick={() => setIsShowPassword(!isShowPassword)}
          ></i>
        </div>

        <button
          className={email && password ? "action" : ""}
          disabled={email && password ? false : true}
          onClick={() => handleLogin()}
        >
          {/* nếu loadingApi(true) thì hiện <i></i> */}
          {loadingApi && <i className="fa-solid fa-spinner fa-spin-pulse"></i>}
          &nbsp;Login
        </button>
        <div className="back">
          <i className="fa-solid fa-angles-left"></i>
          <span onClick={() => handleGoBack()}>&nbsp;Go back</span>
        </div>
      </div>
    </>
  );
};
export default Login;
