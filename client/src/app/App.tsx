import { createUser, getAllUsers } from "@/entities/users/api/userService";
import UserInfo from "@/entities/users/ui/UserInfo";
import { useEffect, useState } from "react";
import { Button, Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/counterSlice";

function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [email, setEmail] = useState("");
  const [submitCount, setSubmitCount] = useState(0);

  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch<any>();

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
      {count}
      <Button onClick={() => dispatch(increment())}>sss</Button>
    </div>
  );
}

export default App;
