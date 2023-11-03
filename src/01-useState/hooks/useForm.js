import { useState } from "react";

export const useForm = ( initialForm = {} ) => { // Función para usar en formulario.
    const [ formState, setFormState ] = useState(initialForm); // El estado inicial será un array vacío.

    const onInputChange = ({target}) => { // Cuándo el input cambie de estado.
        const { name, value} = target; // Recogemos el valor y el nombre de ese input.
        setFormState({ // Esparcimos el estado del formulario, y al nombre, le pondremos el valor.
            ...formState,
            [ name ]: value
        });
    };
  
    const onResetForm = () => { // Cuándo se reinicie el formulario.
        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}