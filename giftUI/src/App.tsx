// Path: src/App.tsx
// App container where w'll wrap all our components.

import "./App.css";
import Jump from "./components/Jump/Jump";
import Store from "./pages/Store/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App () {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Store />} />
                </Routes>
                <Jump />
            </BrowserRouter>
        </>
    );
}

export default App;