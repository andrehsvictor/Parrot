import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./contexts/AuthContext";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <HomePage />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
