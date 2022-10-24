import Paciente from './pacientes';
function Listado({pacientes, setPaciente, eliminarPaciente}){

    
    return(
        <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll md:h-screen box-sizing:border-box">
            <h2 className="font-black text-3xl text-center">Listado Paciente</h2>
                <p className="text-xl mb-10 mt-5 text-center  ">Administra tus {" "}
                    <span className="text-indigo-600 font-bold">
                        Pacientes/Citas
                    </span> {" "}
                </p>
                {pacientes.map(Paciente=>(
                   <Paciente
                    key={pacientes.id} 
                    eliminarPaciente={eliminarPaciente}
                    setPaciente={setPaciente}
                    paciente={Paciente}
                    
                    />)
                    
                )
                }

                <div>

                <h2 className="font-black text-center text-3xl">No hay pacientes</h2>

                <p className='text-xl text-center mt-5'>Comienza a agregar pacientes  
                    <span className='text-indigo-600 font-bold' >Y apareceràn en este lugar</span>
                </p>
                </div>
                
        </div>


    );
}

export default Listado;

//use effect es un callback que se ejecuta cuando otro componente esta listo