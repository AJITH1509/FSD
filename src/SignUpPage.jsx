import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import { Opacity } from "@mui/icons-material";

export const SignUpPage = () => {
  const navigate = useNavigate();

  const reDirect = () => {
    navigate("/login");
  };

  return (
    <Card className="login-container">
      <h4>Sign up</h4>
      <CardContent className="card-content">
        <TextField label="username" variant="standard" />
        <TextField label="password" variant="standard" />
        <Button color="success" variant="contained">
          Register
        </Button>
        <small style={{ opacity: 0.5 }}>already registered ?</small>
        <h5 className="signin" onClick={() => reDirect()}>
          sign in
        </h5>
      </CardContent>
    </Card>
  );
};
