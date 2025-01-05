import { createUser, getAllUsers } from "@/entities/users/api/userService";
import UserInfo from "@/entities/users/ui/UserInfo";
import { useEffect, useState } from "react";
import { Button, Checkbox } from "@mui/material";

function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [email, setEmail] = useState("");
  const [submitCount, setSubmitCount] = useState(0);

  const handleClick = async () => {
    console.log("123123123");
    await createUser({ email, name: "pidor", password: "12" });
    setSubmitCount((prev) => prev + 1);
  };

  useEffect(() => {
    getAllUsers().then((data: any) => setUsers(data));
  }, [submitCount]);
  return (
    <div className="asd bg-red-400">
      {users.map((user) => {
        return <UserInfo key={user.id} user={user} />;
      })}
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {email}
      <button onClick={handleClick} className="bg-blue-600">
        Create
      </button>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to the App
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
