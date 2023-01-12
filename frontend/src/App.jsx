import "./App.css";
import Home from "@pages/Home";
import Profile from "@pages/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import Overwiew from "@pages/Overwiews/Overwiew";
import Settings from "@pages/Settings/Settings";
import Chat from "@pages/chat/Chat";
import Logout from "@pages/Logout/Logout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Schedule" element={<Home />} />
        <Route path="/Overwiew" element={<Overwiew />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
