"use client";

import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MdRestaurantMenu, MdClose } from "react-icons/md";
import Link from "next/link";

const MobileMenu = () => {
  const logout = () => {
    //logout functionality
  };

  return (
    <Menu as="div" className="relative inline-block text-center">
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
        <Menu.Items className="absolute bg-ironOrange text-plumPurple text-sm font-semibold rounded-[5px] p-4 top-0 right-0 flex flex-col gap-y-4">
          <Menu.Item as="div" className="absolute top-1 right-1">
            {({ close }) => <MdClose color="#5F0F40" onClick={close} />}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <Link
                className={`${
                  active && "bg-flameOrange rounded-[5px]"
                } border-b border-b-explodingStar mt-4`}
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
                  active && "bg-flameOrange rounded-[5px]"
                } border-b border-b-explodingStar`}
                href="/quizzes"
              >
                Quizzes
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active && "bg-flameOrange rounded-[5px]"
                } border-b border-b-explodingStar`}
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
