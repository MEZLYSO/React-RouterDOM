import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>HomePage</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
