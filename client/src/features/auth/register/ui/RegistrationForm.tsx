import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { createUser } from "@/entities/users/api/userService";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "name",
    email: "email@example.com",
    password: "some-real-password",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    createUser(formData).then((response) => {
      console.log(response);
    });
  };

  return (
    <Box className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
            className="mb-2"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            className="mb-2"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            className="mb-2"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full"
        >
          Register
        </Button>
      </form>
    </Box>
  );
}

export default RegistrationForm;
