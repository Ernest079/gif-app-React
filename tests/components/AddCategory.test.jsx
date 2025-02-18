import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en AddCategory', () => {
  test('Debe de cambiar el valor en la caja de texto', () => { 
    render (
      <AddCategory onNewCategory = {()=>{}}/>
    );
    const input = screen.getByRole('textbox');
    fireEvent.input(input, {target:{value: 'Haikyuu'}});
    expect(input.value).toBe('Haikyuu');
  });

  test('Debe de llamar onNewCategory si el input tiene algun valor', () => {
    const inputValue = 'Haikyuu';
    const onNewCategory = jest.fn();
    render (
      <AddCategory onNewCategory = {onNewCategory}/>
    );

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form', {name: "gif-form"});

    fireEvent.input(input, {target:{value: inputValue}});
    // screen.debug(); 
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('NO debe de llamar el onNewCategory si el input esta vacio', () => {
    const onNewCategory = jest.fn();
    render (
      <AddCategory onNewCategory = {onNewCategory}/>
    );

    const form = screen.getByRole('form', {name: "gif-form"});

    fireEvent.submit(form);
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();

  });
})