import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
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
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="email" placeholder="Email" id="email" />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
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
