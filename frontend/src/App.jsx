import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components"
import Footer from "./components/Footer"
import { Home, Profile, Rent, AddCar, Login, Detail } from "./pages"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/add-car' element={<AddCar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App