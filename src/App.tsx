import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./app/routes"

export const App = ()=> {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
