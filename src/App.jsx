import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components"
import Footer from "./components/Footer"
import { Home, Profile, Rent } from "./pages"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App