import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MyCartPage from "./pages/MyCartPage"
import DetailsPage from "./pages/DetailsPage"
import CategoryPage from "./pages/CategoryPage"
import BookingPage from "./pages/BookingPage"
import SucceesBookingPage from "./pages/SuccessBookingPage"
import PaymentPage from "./pages/PaymentPage"
import MyBookingPage from "./pages/MyBookingPage"

function App() {
  

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/cart" element={<MyCartPage />} />
    <Route path="/booking" element={<BookingPage />} />
    <Route path="/payment" element={<PaymentPage />} />
    <Route path="/success-booking" element={<SucceesBookingPage />} />
    <Route path="/my-booking" element={<MyBookingPage />} />
    <Route path="/service/:slug" element={<DetailsPage />} />
     <Route path="/category/:slug" element={<CategoryPage />} />
  </Routes>
  
  </BrowserRouter>
  )
}

export default App
