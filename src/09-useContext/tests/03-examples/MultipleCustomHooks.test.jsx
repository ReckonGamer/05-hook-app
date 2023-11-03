import { render } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../03-examples";
import { useFetch } from "../../../01-useState/hooks";

jest.mock('../../../01-useState/hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks />', () => {

  test("debe de mostrar el componente por defecto", () => {
            
    render(<MultipleCustomHooks/>);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Pokémon Random'));

    const nextButton = screen.getByRole('button', {name: 'Next quote'});

    expect(nextButton.disabled).toBeTruthy();
   
    // screen.debug();
  });

  test('debe de mostrar un Quote', () => {
    
    useFetch.mockReturnValue({
      data: [{ author: "Pau", quote: "Odio hacer testing"}],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks/>);
    screen.debug();
  })
  
});
