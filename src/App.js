import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Forgot from "./pages/Forgot";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import PageTransitionOverlay from "./pages/PageTransitionOverlay";

const appRoutes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/academics", element: <Academics /> },
  { path: "/admissions", element: <Admissions /> },
  { path: "/facilities", element: <Facilities /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/contact", element: <Contact /> },
];

function App() {
  return (
    <Router>
      <PageTransitionOverlay />
      <Routes>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
