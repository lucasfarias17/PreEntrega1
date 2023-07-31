// login con 3 intentos para ingresar
let user = "lucas"
let pass = "messi"

const login = () => {
    let ingresar = false 
    let userIngresado = prompt("Ingrese su usuario")
    if(user === userIngresado){
        for(let i = 3; i > 0; i--){
            let passIngresado = prompt(`Ingrese su contraseña. Tiene ${i} intentos`)
            if(passIngresado === pass && user === userIngresado){
                alert("Ingreso exitoso")
                ingresar = true
                break
            }else{
                console.log("Contraseña errónea, ingreso bloqueado.")
            }
        }
    }else{
        console.log("Usuario no registrado")
    }
    return ingresar
}            
// si el login es correcto, pasa a la compra de camisetas. en caso de ser falso, se cierra la página.
if(login()){
    alert("Ingrese la opción de la camiseta que desee comprar, para terminar su compra ingrese ESC")
    
    let seleccionarCamiseta = prompt(`1- Camiseta River titular $9000
                                    \n 2- Camiseta River suplente $12000
                                    \n 3- Camiseta River alternativa $18000`).toUpperCase()
    let cantidadSeleccionada
    let precioTotal = 0
    function cantidad(cant, precio){
        return cant * precio
    }
    while(seleccionarCamiseta != "ESC"){
        switch(seleccionarCamiseta){
            case "1":
                cantidadSeleccionada = +(prompt("Seleccionó camiseta River titular, indique la cantidad que desee llevar"))
                if(isNaN(cantidadSeleccionada)){
                    alert("Error, debe ingresar números")
                }else{
                    precioTotal += cantidad(cantidadSeleccionada, 9000)
                }
                break
            case "2":
                cantidadSeleccionada = +(prompt("Seleccionó camiseta River suplente, indique la cantidad que desee llevar"))
                if(isNaN(cantidadSeleccionada)){
                    alert("Error, debe ingresar números")
                }else{
                    precioTotal += cantidad(cantidadSeleccionada, 12000)
                }
                break
            case "3":
                cantidadSeleccionada = +(prompt("Seleccionó camiseta River alternativa, indique la cantidad que desee llevar"))
                if(isNaN(cantidadSeleccionada)){
                    alert("Error, debe ingresar números")
                }else{
                    precioTotal += cantidad(cantidadSeleccionada, 18000)
                }
                break
            default:
                alert("Error, debe elegir el número de la camiseta que desee.")
                break
        }
        seleccionarCamiseta = prompt(`1- Camiseta River titular $9000
                                    \n 2- Camiseta River suplente $12000
                                    \n 3- Camiseta River alternativa $18000`).toUpperCase()
    }
    alert(`El total de su compra es de $${precioTotal}`)
    console.log("Gracias por su compras, vuelva prontos")
}
            