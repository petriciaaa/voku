import { createUser, getAllUsers } from "@/entities/users/api/userService";
import UserInfo from "@/entities/users/ui/UserInfo";
import { useEffect, useState } from "react";

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
    <div className="asd">
      {users.map((user) => {
        return <UserInfo key={user.id} user={user} />;
      })}
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {email}
      <button onClick={handleClick}>Create</button>
    </div>
  );
}

export default App;
