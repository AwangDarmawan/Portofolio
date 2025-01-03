
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portofolio from "./Pages/Portofolio";
function App() {
  

  return (
    <>
    
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portofolio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
