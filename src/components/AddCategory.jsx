import { useState } from "react";

export const AddCategory = ({addCategory}) => {
  const [inputValue, setInputValue] = useState('Naruto');
  const onInputChange = ({target}) =>{
    setInputValue(target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <=1){
      return;
    }
    addCategory(cat => [inputValue,...cat] );
    setInputValue('');
  }
  return (
    <form onSubmit={onSubmit}>
      
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />

    </form>
  );
}
