"use client";

import React from "react";
import Button from "./Button";
import Input from "./Input";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa";

const LoginForm = () => {
  const route = usePathname();
  const router = useRouter();

  const handleSubmit = () => {
    // handle submit logic
    void router.replace("/dashboard");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
        <Input
          type="email"
          required
          placeholder="email"
          id="email"
          name="email"
          autoComplete="email"
        />

        <Input
          type="password"
          required
          placeholder="password"
          id="password"
          name="password"
          autoComplete="current-password"
        />

        <Button
          variant="primary"
          onClick={() => void router.replace("/dashboard")}
        >
          {route === "/" ? "Sign Up" : "Login"}
        </Button>

        {route === "/" && (
          <div className="flex justify-start gap-x-2 items-center">
            <div className="relative flex justify-center items-center">
              <input
                id="admin"
                name="admin"
                className="appearance-none peer rounded-[2px] h-4 w-4  border border-flameOrange checked:bg-flameOrange bg-plumPurple "
                type="checkbox"
              />

              <FaCheck
                color="#5F0F40"
                className="absolute hidden peer-checked:block"
                size={7}
              />
            </div>
            <label className="text-xs text-flameOrange" htmlFor="admin">
              Create Admin Account
            </label>
          </div>
        )}
      </form>
      <Link
        className="text-flameOrange text-xs font-light text-right mt-2"
        href={route === "/" ? "/login" : "/"}
      >
        {route === "/" ? "Login" : "Sign Up"}
      </Link>
    </>
  );
};

export default LoginForm;
