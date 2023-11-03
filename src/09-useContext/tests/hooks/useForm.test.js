import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../../01-useState/hooks/useForm";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: "Pau",
        email: "pau@skrit.es",
    };

    test('debe de regresar los valores por defecto', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
        });
    });

    test('debe de cambiar el nombre del formulario', () => {
      
        const newValue = "Pau";
        const { result } = renderHook(() => useForm(initialForm) );
        const { onInputChange } = result.current;


        act(() =>{
            onInputChange({ target: { name: 'Pau', value: newValue } } );
        });

        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name ).toBe( newValue );
    });
    
    test('debe de realizar el reset del formulario ', () => {
        
        const newValue = "Pau";
        const { result } = renderHook(() => useForm(initialForm) );
        const { onInputChange, onResetForm } = result.current;


        act(() =>{
            onInputChange({ target: { name: 'Pau', value: newValue } } );
            onResetForm();
        });

        expect( result.current.name ).toBe( initialForm.value );
        expect( result.current.formState.name ).toBe( initialForm.name );
    });
});
