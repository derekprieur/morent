import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components"
import Footer from "./components/Footer"
import { Home, Profile, Search, AddCar, Login, Detail, Rent } from "./pages"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/add-car' element={<AddCar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path='/rent/:id' element={<Rent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App