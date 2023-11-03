import { useCounter, useFetch } from "../01-useState/hooks/";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  const { name, height} = data.name && data.height;
  return (
    <>
        <h1> Pokémon Random</h1>
        <hr />

        {
          isLoading 
            ? <LoadingQuote/> 
            : <Quote name = { name } height = { height }/>
        }
        
        
        <button className="btn btn-primary" disabled={isLoading} onClick={ () => increment() }>
          Next Pokemon
        </button>

        
    </>
  );
};