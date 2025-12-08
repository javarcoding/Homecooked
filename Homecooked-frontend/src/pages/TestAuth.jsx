import { useState } from "react";
import { registerUser, loginUser } from "../services/authService";

function TestAuth() {
  const [result, setResult] = useState("");

  const testRegister = async () => {
    const data = await registerUser({
      name: "Test User",
      email: "test@gmail.com",
      password: "123456",
      address: "Test City",
      phone: "9999999999",
    });
    setResult(JSON.stringify(data));
  };

  const testLogin = async () => {
    const data = await loginUser({
      email: "test@gmail.com",
      password: "123456",
    });
    setResult(JSON.stringify(data));
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Auth Service Test</h2>
      <button
        className="bg-green-600 text-white p-2 m-2"
        onClick={testRegister}
      >
        Test Register
      </button>

      <button
        className="bg-blue-600 text-white p-2 m-2"
        onClick={testLogin}
      >
        Test Login
      </button>

      <pre>{result}</pre>
    </div>
  );
}

export default TestAuth;
