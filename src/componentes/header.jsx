function Header(){
    //function Header({numeros, admin, sumaEjemplo}){
    const variableHeader=true
   /* sumaEjemplo(variableHeader)
    console.log(numeros)
    console.log(admin)
    suma()
*/
   
    return(
        <h1 className="text-center font-black text-5xl mx-auto
        md:w-2/3">Seguimiento Pacientes {" "} <span className="text-indigo-600">Veterinaria</span></h1>
       
    )
}

export default Header

//espacio {" "}