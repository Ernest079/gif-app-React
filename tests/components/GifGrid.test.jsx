import {render, screen} from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
  const category = 'Haikyuu';
  test('Debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(
      <GifGrid
        category={category}
      />
    );
    // screen()
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));

  });
  
  test('Debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {

    const gifs = [
      {
        id: 'Esteesunid',
        title: 'ESte es un titulo',
        url: 'https://esta_es_una_url/'
      },
      {
        id: 'Esteesunid2',
        title: 'ESte es un titulo 2',
        url: 'https://esta_es_una_url/2'
      }
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(
      <GifGrid
        category={category}
      />
    );
    // screen.debug();

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
