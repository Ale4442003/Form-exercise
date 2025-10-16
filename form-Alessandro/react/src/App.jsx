import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Confirm from './pages/Confirm'
import Success from './pages/Success'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  )
}

export default App