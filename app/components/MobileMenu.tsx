"use client";

import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MdRestaurantMenu, MdClose } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MobileMenu = () => {
  const router = useRouter();

  const logout = () => {
    //logout functionality
    void router.replace("/");
  };

  return (
    <Menu as="div" className="relative  inline-block text-center">
      <Menu.Button>
        <MdRestaurantMenu fill="#FB8B24" size={20} />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute w-[150px] border-2 border-flameOrange bg-black text-flameOrange text-sm font-semibold rounded-[5px] p-4 top-0 right-0 flex flex-col gap-y-4">
          <Menu.Item as="div" className="absolute cursor-pointer top-1 right-1">
            {({ close }) => <MdClose color="#FB8B24" onClick={close} />}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <Link
                className={`${
                  active &&
                  "bg-flameOrange/30 ring-[1px] ring-explodingStar rounded-[5px]"
                }  mt-4`}
                href="/menu"
              >
                Menu
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                className={`${
                  active &&
                  "bg-flameOrange/30 ring-[1px] ring-explodingStar rounded-[5px]"
                }`}
                href="/quizzes"
              >
                Quizzes
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={logout}
                className={`${
                  active &&
                  "bg-flameOrange/30 ring-[1px] ring-explodingStar rounded-[5px]"
                } `}
              >
                Logout
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MobileMenu;
