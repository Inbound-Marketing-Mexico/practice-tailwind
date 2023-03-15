import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "@remix-run/react";

import { Button, Dialog as DialogMaterial, AppBar, Toolbar, Typography, Slide } from "@mui/material";
import { Close as CloseIcon, Facebook as FacebookIcon, Instagram as InstagramIcon, YouTube as YouTubeIcon, Twitter as TwitterIcon, Email as EmailIcon } from "@mui/icons-material";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Transition2 = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export const social_medias = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: <FacebookIcon />,
    color: "#516eab",
    isSocialMedia: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: <InstagramIcon />,
    color: "#417096",
    isSocialMedia: true,
  },
  {
    name: "Correo Electrónico",
    href: "https://www.instagram.com/",
    icon: <EmailIcon />,
    color: "#ca212a",
    isSocialMedia: false,
  },
  {
    name: "Twitter",
    href: "https://www.twitter.com/",
    icon: <TwitterIcon />,
    color: "#29c5f6",
    isSocialMedia: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: <YouTubeIcon />,
    color: "#e14e42",
    isSocialMedia: true,
  },
];

const Nav = ({ navigation = [] }) => {
  const [openModal, setOpenModal] = useState(false);

  const location = useLocation();

  useEffect(() => {
    //console.log("hola");
  }, [location]);

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-primary lg:py-[30px] ">
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link to="/">
                      <img className="lg:w-36 w-14" src="/icon.svg" alt="Mexico Travel Channel" />
                    </Link>
                  </div>
                  <div className="hidden lg:block">
                    <div className="ml-10 divide-y divide-solid space-y-4">
                      <div className="flex flex-row-reverse gap-3">
                        {social_medias.map((social, index) => (
                          <div key={index} className="text-white">
                            <a href={social.href} target="_blank" rel="noopener nofollow noreferrer">
                              {social.icon}
                            </a>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-baseline space-x-4 pt-5">
                        {navigation.map((item, index) => (
                          <Link key={index} to={item.href} className={classNames(item.href === location.pathname ? "bg-red-900 text-white" : "text-gray-300 hover:bg-red-400 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium")}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex lg:hidden">
                  {/* Mobile menu button */}
                  <button className="inline-flex items-center justify-center rounded-md bg-primary p-2 text-gray-400 hover:bg-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary" onClick={() => setOpenModal(!openModal)}>
                    <span className="sr-only">Open main menu</span>
                    {openModal ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                  </button>
                </div>
              </div>
            </div>

            <DialogMaterial fullScreen open={openModal} onClick={() => setOpenModal(!openModal)} TransitionComponent={Transition2} className="lg:hidden">
              <AppBar sx={{ position: "relative" }}>
                <Toolbar>
                  <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    <div className="flex flex-row gap-3">
                      {social_medias.map((social, index) => (
                        <div key={index}>
                          <a href={social.href} target="_blank" rel="noopener nofollow noreferrer">
                            {social.icon}
                          </a>
                        </div>
                      ))}
                    </div>
                  </Typography>
                  <Button autoFocus color="inherit" aria-label="close" onClick={() => setOpenModal(!openModal)}>
                    <CloseIcon />
                  </Button>
                </Toolbar>
              </AppBar>
              <div className="bg-primary text-white p-10 font-bold text-[30px]" style={{ height: "100%" }}>
                {navigation.map((item, index) => (
                  <Link key={index} to={item.href} className={classNames(item.href === location.pathname ? "bg-red-900 text-white" : "text-gray-300 hover:bg-red-400 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium")} aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </DialogMaterial>

            {/* {openModal && (
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 md:hidden">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    as="a"
                    to={item.href}
                    className={classNames(
                      item.href === location.pathname
                        ? "bg-red-900 text-white"
                        : "text-gray-300 hover:bg-red-400 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )} */}
          </>
        </Disclosure>
      </div>
    </>
  );
};

export default Nav;
