import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Login, Logout, Profile } from "./components";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <h2 className="text-2xl text-center mt-6">Login whith Auth0</h2>
      <div className="flex flex-col text-white items-center mt-10 gap-3">
        
        {!isAuthenticated ?<Login />: <Logout />}
        <Profile />
      </div>
    </>
  );
}
export default App;
