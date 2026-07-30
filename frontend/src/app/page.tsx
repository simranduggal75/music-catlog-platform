import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

export default function Home() {
  return (
    <main className="mx-auto mt-20 max-w-md p-6 space-y-4">
      <Input
        label="Email"
        placeholder="Enter your email"
      />

      <Button>Login</Button>
    </main>
  );
}