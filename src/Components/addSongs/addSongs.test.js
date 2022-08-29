import { render, screen } from '@testing-library/react';
import AddSongs from './index'

describe('addSongs Component', () => {
    it('add song input should be render on the document', () => {
        render(<AddSongs />);
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument();
    });

    it('add song button should be render on the document', () => {
        render(<AddSongs />);
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    });

    it('function add sound should be called when the button is clicked', () => {
        render(<AddSongs />);
        const button = screen.getByRole('button')
    });
  });