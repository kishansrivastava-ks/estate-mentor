import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
// import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./ui/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Tenants from "./pages/Tenants";
import ListYourHome from "./pages/ListYourHome";
import PartnerWithUs from "./pages/PartnerWithUs";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="property-management" element={<ListYourHome />} />
            <Route path="real-estate-consultant" element={<Tenants />} />
            <Route path="partner-with-us" element={<PartnerWithUs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
