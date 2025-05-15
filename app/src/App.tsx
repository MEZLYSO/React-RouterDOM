import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Dashboard } from "./pages/Dashbord"
import { PrivateRoutes, PublicRoutes } from "./models"
import { AuthGuard } from "./guards"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Dashboard />} />
          </Route>
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
