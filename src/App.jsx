//NUCLEO DE MI PROYECTO
//UNE LOS COMPONENTES
import Header from "./componentes/header"
import Listado from "./componentes/ListadoPaciente"
import Formulario from "./componentes/formulario"
//import Error from "./componentes/Error"
//import Pacientes from "./componentes/pacientes"

import { useState } from "react";
 
 
function App() {
  const [pacientes, setPacientes]=useState([])
  //const sumaEjemplo =(valor)=>{ console.log(valor)}
  const [paciente, setPaciente]=useState({})

  const eliminarPaciente=id=>{const pacientesAct=pacientes.filter
  (paciente=>paciente.id!==id) 
  setPacientes(pacientesAct)}

  return (
  <div className="mt-20 container mx-auto">
  
  <Header />

  <div className="md:flex mt-12">
  <Formulario
  pacientes={pacientes}
  setPacientes={setPacientes}
  paciente={paciente}
  setPaciente={setPaciente}
  />
  <Listado
  pacientes={pacientes}
  setPaciente={setPaciente}
  eliminarPaciente={eliminarPaciente} // se pasa como prop de listado pacientes
  />

  </div>
</div>
 
  )
}

export default App


 /*ejemplo de props
 los datos deben tener llave, solo los string no solo comillas
 numeros={1}
admin={false}

sumaEjemplo={sumaEjemplo}
*/