import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-plumPurple to-xmasCandy flex-col items-center">
      <div className="text-3xl pt-5 font-semibold text-flameOrange">
        Restaurant app
      </div>

      <div className="flex flex-col flex-1 justify-center">
        <div className="flex flex-col gap-y-4">
          <div className="text-center text-flameOrange text-xl font-medium">
            Login/Sign Up
          </div>
          <input
            className="p-1 rounded-[5px]"
            type="email"
            required
            name=""
            id=""
            placeholder="email"
          />
          <input
            className="p-1 rounded-[5px]"
            type="password"
            name=""
            id=""
            placeholder="password"
          />
          <Button variant="primary" disabled>
            Login
          </Button>
        </div>
      </div>
    </main>
  );
}
