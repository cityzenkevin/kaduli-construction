import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { loginFields } from "../constants/formFields";
import Input from "../components/Input";
// import { UserContext } from "../hooks/useAuth";

import logo from "../assets/logo.png";

import loginAvatar from "../assets/loginPerson.svg";

type fields = {
  [key: string]: string | number;
};

const fieldState: fields = {};

loginFields.forEach((field) => {
  fieldState[field.id as keyof typeof fieldState] = "";
});

const Login = () => {


  const [loginState, setLoginState] = useState(fieldState);

  useEffect(() => {}, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const myFields: LoginI = {
    //   username: loginState.email as string,
    //   password: loginState.password as string,
    // };
  };

  return (
    <div className="bg-gray-200  min-h-full h-full flex flex-col  justify-center ">
      <div className="grid grid-cols-2">
        <div className="h-screen bg-primary flex justify-center items-center ">
          <img
            src={loginAvatar}
            alt=""
            className="
         h-2/5 w-2/5 mr-20
         "
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-white">Login</h2>
          </div>
        </div>
        <div className="flex px-10 py-20 ml-20">
          <div className="bg-white ml- max-w-md mb-10 w-full space-y-4 border p-6 rounded shadow-md">
            <div className="flex flex-col justify-center items-center ">
              <div className="mx-auto flex  items-center justify-center  shadow-sm">
                <img src={logo} alt="" className="w-24" />
              </div>
            </div>
            {/* //Change this after state management */}
            <div
              className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-2 ${
                "error" ? "hidden" : "flex"
              }`}
              role="alert"
            >
              <span className="block sm:inline">{"error"}</span>
            </div>
            <form className=" space-y-6" onSubmit={onSubmit}>
              <div className="">
                {loginFields.map((field) => (
                  <Input
                    key={field.id}
                    labelText={field.labelText}
                    labelFor={field.labelFor}
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    isRequired={field.isRequired}
                    placeholder={field.placeholder}
                    customClass="dark:bg-dark-bg"
                    defaultValue={
                      loginState[field.id as keyof typeof loginState]
                    }
                    handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setLoginState({
                        ...loginState,
                        [e.target.id]: e.target.value,
                      });
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between ">
                <div className="text-sm w-full flex justify-between">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-primary hover:primaryHover"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary "
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
