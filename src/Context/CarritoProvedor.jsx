
import React, { createContext , useState } from "react" ;
import ItemCount from "../componentes/ItemCount";

export const CarritoContext = createContext();

const CarritoProvedor = ({ children }) => {
 //funciones
    const dameUnaAlerta = (texto) => {
        alert(texto);
    };

    const agregarAlCarrito = (item) => {
        setCarrito([...carrito,item]);
        console.log (item)
        
        
    }

// variables 
    let nombre = "Guido";
    let apellido ="Negrisoli";
    let edad = 33;
    let localidad ="Buenos Aires";

    const [carrito,setCarrito] = useState([]);
  return (
        <CarritoContext.Provider value= {{nombre,apellido,edad,localidad,dameUnaAlerta,agregarAlCarrito,carrito }}>
                  {children}
        </CarritoContext.Provider>
        )
}

export default CarritoProvedor