import React from "react";

interface UserInfoProps {
  user: {
    name: String;
    id: String;
    password: String;
    email: String;
  };
}
function UserInfo({ user }: any) {
  return (
    <div>
      <span>{user.name}</span>
      <span>{user.email}</span>
      <span>{user.id}</span>
    </div>
  );
}

export default UserInfo;
