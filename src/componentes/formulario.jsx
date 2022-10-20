import {useState, useEffect} from 'react';
import Error from './error';


function Formulario(pacientes, setPacientes, paciente, setPaciente){
    const [mascota, setMascota ] = useState('');
    const [sintomas, setSintomas ] = useState('');
    const [propietario, setPropietario ] = useState('');
    const [email, setEmail ] = useState('');
    const [alta, setAlta ] = useState(''); //creando un useState. variable, modificador y hooks (useState) ('') valor vacio para poner datos, inicia vacio en este caso  
    const [error, setError ] = useState(false);

    //generar numeros aleatorios
    const generarId=()=>{
        const random=Math.random().toString(36) //36 LA CANTIDAD DEL NUMERO ALEATORIO QUE MANDARA
        const fecha=Date.now().toString(36)
        return random+fecha
    }
    //validar formulario
    const validarFormulario=(e)=>{ //funcion validar formulario mandada llamar en el form con un onSubmit
        e.preventDefault()
        if([mascota, propietario, email, alta, sintomas].includes('')){
            console.log('Hay al menos un campo vacio')
            setError(true)
            return //terminar
        };
        //console.log ('todo ok')
        setError(false)
        const objetoPaciente={mascota, propietario, email, alta, sintomas}
        if (paciente.id){ 

        }else{
            objetoPaciente.id=generarId()
        }
        //setPacientes(objetoPaciente)
        //iterar paciente y unirlo a objeto
        setPacientes([...pacientes, objetoPaciente])




        //reiniciar el formulario, limpiando cada campo de los input
        setMascota('') 
        setSintomas('') 
        setPropietario('') 
        setEmail('') 
        setAlta('') 
       
    };
    
    
    return(
        <div className="md:w-1/2 mx-5 lg:w-2/5 ">
            <h2 className="text-center font-black text-3xl">Seguimiento Pacientes</h2>
            <p className="text-center mt-5 text-lg mb-10">Añade Pacientes <span className="text-indigo-600 font-bold">Administrarlos</span></p>
            
            <form className="bg-slate-300 py-10 px-8 shadow-md rounded-lg" onSubmit={validarFormulario}>
                <div>
                {error&& //si la funcion error se cumple se imprime el parrafo: Todos los campos son obligatorios, usando de/como etiqueta el componente Error
                <Error>
                    <p>Todos los campos son obligatorios</p>

                </Error>}
                    <label className="block text-gray-700 uppercase font-bold ">Nombre Mascota</label>
                    <input  className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                    type="text"
                    placeholder="Nombre de la mascota"
                     value={mascota} onChange={(e)=> setMascota(e.target.value) //target.value el valor del input
                    //mandar llamar al modificador de cada una de ls variables en el arrow function, lo recibe el modificador set mascota y se guarda para pasarlo a mascota y que cambie su valor
                     }/>
                </div>

                <div>
                    <label className="block text-gray-700 uppercase font-bold ">Sintomas</label>
                    <input  className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                    type="text"
                    placeholder="Sintomas"
                    value={sintomas} onChange={(e)=> setSintomas(e.target.value)}/>
                </div>

                <div>
                    <label className="block text-gray-700 uppercase font-bold ">Alta</label>
                    <input  className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                    type="date"
                    placeholder="Alta"
                    value={alta}onChange={(e)=> setAlta(e.target.value)}/>
                </div>

                <div>
                    <label className="block text-gray-700 uppercase font-bold ">Propietario</label>
                    <input  className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                    type="text"
                    placeholder="Propietario"
                    value={propietario}onChange={(e)=> setPropietario(e.target.value)}/>
                </div>

                <div>
                    <label className="block text-gray-700 uppercase font-bold ">Email</label>
                    <input  className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                    type="email"
                    placeholder="Email"
                    value={email}onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <input type="submit"  className="bg-indigo-600 text-white uppercase w-full p-3 mt-5 rounded-md hover:bg-indigo-400 cursor-pointer transition-colors" value={"agregar paciente"}/>


            </form>
        </div>
     
       
    )
}

export default Formulario;

