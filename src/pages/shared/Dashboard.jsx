import React, { Fragment } from "react";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
  return (
    <>
      <div className="h-full bg-gray-100">
        <div className="h-full">
          <div className="min-h-full">
            <Disclosure as="nav" className="bg-gray-800">
              {({ open }) => (
                <>
                  <div className="dashboard__Container">
                    <div className="flex items-center justify-between h-16">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-8 w-8"
                            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                            alt="Workflow"
                          />
                        </div>
                        <div className="dashboard__Navbar--Container">
                          <div className="dashboard__Navbar--Tabs">
                            {/* {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "dashboard__Navbar--Tab-Items-Active"
                                    : "dashboard__Navbar--Tab-Items-Hover",
                                  "dashboard__Navbar--Tab-Items"
                                )}
                                aria-current={item.current ? "page" : undefined}
                              >
                                {item.name}
                              </a>
                            ))} */}
                            <a href="/" className="dashboard__Navbar--Tab-Items dashboard__Navbar--Tab-Items-Active">Dashboard</a>
                            <a href="/" className="dashboard__Navbar--Tab-Items dashboard__Navbar--Tab-Items-Hover">Team</a>
                            <a href="/" className="dashboard__Navbar--Tab-Items dashboard__Navbar--Tab-Items-Hover">Projects</a>
                            <a href="/" className="dashboard__Navbar--Tab-Items dashboard__Navbar--Tab-Items-Hover">Calendar</a>
                            <a href="/" className="dashboard__Navbar--Tab-Items dashboard__Navbar--Tab-Items-Hover">Reports</a>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="dashboard__Menu--Button">
                          <button
                            type="button"
                            className=""
                          >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>

                          {/* Profile dropdown */}
                          <Menu as="div" className="dashboard__Menu--Container">
                            <div>
                              <Menu.Button className="dashboard__Menu--Profile-Button">
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={user.imageUrl}
                                  alt=""
                                />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="dashboard__Menu--Profile-Items">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          active ? "dashboard__Menu--Profile-Item-Active" : "",
                                          "dashboard__Menu--Profile-Item"
                                        )}
                                      >
                                        {item.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="dashboard__MenuMobile--Button">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XIcon
                              className="dashboard__MenuMobile--Icon"
                              aria-hidden="true"
                            />
                          ) : (
                            <MenuIcon
                              className="dashboard__MenuMobile--Icon"
                              aria-hidden="true"
                            />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>

                  <Disclosure.Panel className="md:hidden">
                    <div className="dashboard__MenuMobile--Items">
                      {navigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "dashboard__MenuMobile--Nav-Item-Active"
                              : "dashboard__MenuMobile--Nav-Item-Hover",
                            "dashboard__MenuMobile--Nav-Item"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                    <div className="dashboard__Menu--Profile-Box">
                      <div className="dashboard__Menu--Profile-FlexBox">
                        <div className="dashboard__Menu--Profile-FlexBox_Img">
                          <img
                            className="dashboard__Menu--Profile-FlexBox_ImgBox"
                            src={user.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="dashboard__Menu--Profile_Info">
                          <div className="dashboard__Menu--Profile_Info-Name">
                            {user.name}
                          </div>
                          <div className="dashboard__Menu--Profile_Info-Email">
                            {user.email}
                          </div>
                        </div>
                        <button
                          type="button"
                          className="dashboard__Menu--Profile_Button"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="dashboard__Menu--Profile-Container">
                        {userNavigation.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="dashboard__Menu--Profile-Nav"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <header className="bg-white shadow">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl tracking-tight font-bold text-gray-900">
                  Dashboard
                </h1>
              </div>
            </header>
            <main>
              <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* Replace with your content */}
                <div className="px-4 py-6 sm:px-0">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                </div>
                {/* /End replace */}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
