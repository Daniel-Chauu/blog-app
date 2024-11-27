/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Spinner } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupSchema } from "../validations/authValidation";
import Input from "../components/Input";
import { ValidationError } from "yup";
import { host } from "../constants/api";
import { toast } from "react-toastify";

type SignUpFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type ErrorsType = {
  [key: string]: string;
};

const SignUp = () => {
  const [formdata, setFormdata] = useState<SignUpFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<ErrorsType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleFormValidation = async (value: any) => {
    try {
      await signupSchema.validate(value, {
        abortEarly: false,
      });
      setErrors([]);
    } catch (error: any) {
      if (error instanceof ValidationError) {
        const errorsObject: ErrorsType[] = [];
        for (const err of error.inner) {
          errorsObject.push({
            [err.path as string]: err.message,
          });
        }
        setErrors(errorsObject);
      }
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
    handleFormValidation({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form validation

    // handle form submission

    try {
      setLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { confirmPassword, ...dataFetch } = formdata;
      const res = await fetch(`${host}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataFetch),
      });
      if (res.ok) {
        const data = await res.json();
        toast.success(data.message);
        setLoading(false);
        navigate("/sign-in");
      } else {
        const data = await res.json();
        toast.error(data.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex flex-col w-full max-w-3xl gap-5 p-3 lg:max-w-4xl md:flex-row md:items-center">
        <div className="flex-1">
          <Link
            to={"/"}
            className="!text-4xl font-bold sm:text-xl dark:text-white"
          >
            <span className="inline-block px-2 py-1 text-white rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Sahand's
            </span>
            Blog
          </Link>
          <p className="mt-3 text-sm">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              handleChange={handleChange}
              id="username"
              labelValue="Username"
              placeholder="Please enter a username"
              errorMessage={
                errors.find((error) => Object.keys(error).includes("username"))
                  ?.username
              }
            />
            <Input
              handleChange={handleChange}
              id="email"
              type="email"
              labelValue="Email"
              placeholder="example@gmail.com"
              errorMessage={
                errors.find((error) => Object.keys(error).includes("email"))
                  ?.email
              }
            />
            <Input
              handleChange={handleChange}
              id="password"
              labelValue="Password"
              placeholder="Please enter your password"
              type="password"
              errorMessage={
                errors.find((error) => Object.keys(error).includes("password"))
                  ?.password
              }
            />
            <Input
              handleChange={handleChange}
              id="confirmPassword"
              labelValue="Confirm password"
              placeholder="Please confirm your password"
              type="password"
              errorMessage={
                errors.find((error) =>
                  Object.keys(error).includes("confirmPassword")
                )?.confirmPassword
              }
            />

            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="ml-2">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <div className="mt-2">
            <span>Have an account?</span>
            <Link to={"/sign-in"} className="ml-2 text-blue-500 underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
