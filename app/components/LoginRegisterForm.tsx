"use client";

import React from "react";
import Button from "./Button";
import Input from "./Input";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const LoginForm = () => {
  const route = usePathname();
  const router = useRouter();

  const handleSubmit = () => {
    // handle submit logic
    void router.replace("/dashboard");
  };

  return (
    <>
      <form className="flex flex-col gap-y-4">
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
