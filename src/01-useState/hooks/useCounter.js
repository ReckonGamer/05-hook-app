import { useState } from "react"

export const useCounter = ( initialValue = 100 ) => { // Función contador, con valor inicial.

    const [ counter, setCounter ] = useState( initialValue ); // Usamos un estado, con el valor inicial.

    const increment = ( value = 1) => { // Función incremento.
        setCounter( (current) => current + value ); // Recogemos el contador, y al valor reciente, le sumamos el valor.
    }

    const decrement = ( value = 1) => { // Función decremento.
        if( counter === 0 ) return; // Si el contador baja de 0, que no siga decrementando.
        setCounter( (current) => current - value );
    }

    const reset = () => { // Función reinicio contador.
        setCounter( initialValue );
    }

    return { // Devolvemos el contador, y las funciones.
        counter,
        increment,
        decrement,
        reset,
    }
}