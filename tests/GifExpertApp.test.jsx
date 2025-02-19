import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en GifExpertAPP', () => {
  test('Debe hacer match con el snapshot', () => {
    const {container} = render(<GifExpertApp/>);
    // screen.debug();
    expect(container).toMatchSnapshot();
  });

  test('Debe de agregar la categoria', () => {
    render(<GifExpertApp/>);
    const value = 'Naruto';

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form', {name: "gif-form"});

    fireEvent.input(input, {target:{value: value}});
    // screen.debug(); 
    fireEvent.submit(form);
    // screen.debug(); 

    expect(screen.getByText(value)).toBeTruthy();
  });
});