import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Layout from "./pages/layout";
import { useEffect, useLayoutEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isAuthorize, setIsAuthorize] = useState(false);

  useEffect(() => {
    const password = localStorage.getItem("password");
    if (!password || JSON.parse(password) !== "111111") {
      window.location.replace("/login");
      return;
    }

    setIsAuthorize(true);
  }, []);

  console.log({ isAuthorize });
  if (!isAuthorize) {
    return null;
  }

  return (
    <div className="App">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
