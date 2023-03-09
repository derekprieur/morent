import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components"
import { Home, Rent } from "./pages"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App