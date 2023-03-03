import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const LoginPage = () => {
  return (
    <Card className="login-container">
      <h4>Login</h4>
      <CardContent className="card-content">
        <TextField label="username" variant="standard" />
        <TextField label="password" variant="standard" />
        <Button variant="contained">Login</Button>
      </CardContent>
    </Card>
  );
};
