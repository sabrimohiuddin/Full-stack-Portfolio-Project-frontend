// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
//import Login from "./Pages/Login";
//import Logout from "./Pages/Logout";

// COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Index />} />
            <Route path="/products/new" element={<New />} />
            <Route path="/products/:id" element={<Show />} />
            <Route path="/products/:id/edit" element={<Edit />} />
            {/* <Route path="/products/:id/reviews" element={<Reviews />} /> */}
            {/* <Route path="/users" element={<Users />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/logout" element={<Logout />} /> */}
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
