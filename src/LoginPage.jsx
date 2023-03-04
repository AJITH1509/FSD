import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useFormik } from "formik";

export const LoginPage = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      fetch(`${API}/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
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
