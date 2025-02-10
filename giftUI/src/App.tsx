// Path: src/App.tsx
// App container where w'll wrap all our components.

import "./App.css";
import Jump from "./components/Jump/Jump";
import Gifts from "./pages/Gifts/Gifts";
import Store from "./pages/Store/Store";
import Success from "./pages/Success/Success";
import Earn from "./pages/Earn/Earn";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Profile from "./pages/Profile/Profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App () {
    const location = window.location;
    const excludeRoutes = ["/success"];
    const isExcludedRoute = excludeRoutes.some(route => {
        // Convert dynamic routes to regex and test if the current path matches
        const regex = new RegExp(`^${route.replace(/:\w+/g, "\\w+")}$`);
        return regex.test(location.pathname);
    });

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Store />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/gifts" element={<Gifts />} />
                    <Route path="/earn" element={<Earn />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                {!isExcludedRoute && <Jump />}
            </BrowserRouter>
        </>
    );
}

export default App;