//NUCLEO DE MI PROYECTO
//UNE LOS COMPONENTES
import Header from "./componentes/header"
import Listado from "./componentes/ListadoPaciente"
import Formulario from "./componentes/formulario"
import Error from "./componentes/Error"
import Pacientes from "./componentes/pacientes"


function App() {
  

  return (
  <div className="mt-20">
  
  <Header/>
  <Formulario/>
  <Listado/>
  
  <Error/>
  <Pacientes/>
  </div>
 
  )
}

export default App
