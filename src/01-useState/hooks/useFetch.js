import { useEffect, useState } from "react";

export const useFetch = ( url ) => { // Función para recoger el link.
    const [state, setState] = useState({ // Estado inicial.
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async() => { // Función asíncrona.
        setState({ // Ponemos el estado y lo esparcimos.
            ...state,
            isLoading: true,
        });

        const resp = await fetch( url ); // La respuesta espera a que llegue el link.
        const data = await resp.json(); // La información se pasa a JSON.

        console.log(data.name);
        console.log(data.height);

        setState({
            data: data,
            isLoading: false,
            hasError: null,
        });
    };

    useEffect(() => { // Este efecto se lanzará al ejecutar la función.
        getFetch();
    }, [url]);

    return { // Devolvemos todas las variables del state.
        data: state.data,
        isLoading: state.isLoading, 
        hasError: state.hasError,
    };
};