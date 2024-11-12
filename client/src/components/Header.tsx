import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <>
      <Navbar className="border-b-2">
        <Link
          to={"/"}
          className="self-center text-sm font-semibold whitespace-nowrap sm:text-xl dark:text-white"
        >
          <span className="inline-block px-2 py-1 text-white rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Sahand's
          </span>
          Blog
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline "
          />
        </form>
        <Button
          className="flex items-center justify-center w-12 h-10 lg:hidden"
          color="gray"
          pill
        >
          <AiOutlineSearch />
        </Button>
        <div className="flex gap-x-2 md:order-2">
          <Button
            className="items-center justify-center hidden w-12 h-10 sm:flex"
            color="gray"
            pill
          >
            <FaMoon />
          </Button>
          <Button gradientDuoTone="purpleToBlue" outline>
            <Link to={"/sign-in"}>Sign in</Link>
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link as={"div"} active={path === "/"}>
            <Link to={"/"}>Home</Link>
          </Navbar.Link>
          <Navbar.Link as={"div"} active={path === "/about"}>
            <Link to={"/about"}>About</Link>
          </Navbar.Link>
          <Navbar.Link as={"div"} active={path === "/projects"}>
            <Link to={"/projects"}>Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
