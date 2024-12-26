import { BrowserRouter, Routes, Route } from "react-router-dom";
import Properties from "./Properties";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Clients from "./Clients";
import PropertyCard from "./PropertyCard";
import Breadcrumb from "./Breadcrumb";
import ClientCard from "./ClientCard";
import AdvFilter from "./AdvFilter";


function App() {
  
  return (
    <>
      <Navbar />
      <BrowserRouter>
      <Breadcrumb />
      <AdvFilter/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/properties_1" element={<PropertyCard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/client_1" element={<ClientCard />} />
          {/* <Route path="/clients/filter" element={<AdvFilter />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
