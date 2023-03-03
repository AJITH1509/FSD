import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PhoneList } from "./PhoneList";
import { LoginPage } from "./LoginPage";
import { useNavigate } from "react-router-dom";
import { SignUpPage } from "./SignUpPage";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <nav>
        <button onClick={() => navigate("/login")}>login</button>
      </nav>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/mobiles" element={<PhoneList />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  return <div>welcome to Mobile App</div>;
};

export default App;
