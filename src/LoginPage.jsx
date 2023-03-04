import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { API } from "../global";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      const data = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });

      if (data.status === 401) {
        console.log("error");
      } else {
        const result = await data.json();
        localStorage.setItem("token", result.token);
        navigate("/mobiles");
      }
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <Card className="login-container">
        <h4>Login</h4>
        <CardContent className="card-content">
          <TextField
            name="username"
            value={values.username}
            onChange={handleChange}
            label="username"
            variant="standard"
          />
          <TextField
            name="password"
            value={values.password}
            onChange={handleChange}
            label="password"
            variant="standard"
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </CardContent>
      </Card>
    </form>
  );
};
