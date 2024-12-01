import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full mx-auto max-w-7xl">
        <div className="grid justify-between w-full sm:flex md:grid-cols-1">
          <div className="items-center justify-center mt-5 sm:flex sm:flex-1">
            <Link
              to={"/"}
              className="self-center text-lg font-semibold whitespace-nowrap sm:text-xl dark:text-white"
            >
              <span className="inline-block px-2 py-1 text-white rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Sahand's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sahand's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Sahand's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex items-center gap-2 mt-2">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
