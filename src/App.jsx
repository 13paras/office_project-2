import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RefundPolicy from "./pages/RefundPolicy";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {
  ITConsultingServices,
  StaffRecruit,
  StaffAugmentation,
  DigitalMarketing,
  Clients,
  ContactUs,
  TermsNCondition,
  Checkout,
} from "./pages";
import ScrollToTop from "./components/ScrollToTop";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/consulting-services' element={<ITConsultingServices />} />
          <Route path='/staff-recruit' element={<StaffRecruit />} />
          <Route path='/staff-augmentation' element={<StaffAugmentation />} />
          <Route path='/digital-marketing' element={<DigitalMarketing />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/terms-N-Condition' element={<TermsNCondition />} />
          <Route path='/refund-policy' element={<RefundPolicy />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
``;
