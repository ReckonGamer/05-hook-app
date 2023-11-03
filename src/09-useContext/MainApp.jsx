import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => { // Página Principal
  return (
    <>
        <UserProvider>
          <Navbar/> {/* Barra navegación */}
          <hr />
        
          <Routes> {/* Rutas */}
              <Route path="/" element= { <HomePage/> } /> {/* Ruta a Inicio. */ }
              <Route path="login" element= { <LoginPage/> } />   {/* Ruta a InicioSesión. */ }                      
              <Route path="about" element= { <AboutPage/> } />  {/* Ruta a SobreNosotros. */ }

              <Route path = "/*" element = { <Navigate to = "/about" /> } /> {/* Ruta por si va a página inexistente. */}
          </Routes>
        </UserProvider>
        
    </>
  )
}