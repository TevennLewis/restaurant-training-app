"use client";

import React, { ChangeEvent, SyntheticEvent, useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa";

const LoginForm = () => {
  const route = usePathname();
  const router = useRouter();

  const admin = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: SyntheticEvent) => {
    // handle submit logic
    event.preventDefault();

    const data = {
      email: email,
      name: name,
      password: password,
      isAdmin: admin.current?.checked,
    };

    await fetch("/api/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
        <Input
          type="email"
          required
          placeholder="email"
          id="email"
          value={email}
          name="email"
          autoComplete="email"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />

        <Input
          type="text"
          required
          placeholder="name"
          id="name"
          value={name}
          name="email"
          autoComplete="email"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />

        <Input
          type="password"
          required
          placeholder="password"
          id="password"
          value={password}
          name="password"
          autoComplete="current-password"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />

        <Button variant="primary" type="submit">
          {route === "/" ? "Sign Up" : "Login"}
        </Button>

        {route === "/" && (
          <div className="flex justify-start gap-x-2 items-center">
            <div className="relative flex justify-center items-center">
              <input
                ref={admin}
                id="admin"
                name="admin"
                value="isAdmin"
                className="appearance-none peer rounded-[2px] h-5 w-5  border border-flameOrange checked:bg-flameOrange bg-plumPurple "
                type="checkbox"
              />

              <FaCheck
                color="#5F0F40"
                className="absolute hidden pointer-events-none peer-checked:block"
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
