import { render, screen } from '@testing-library/react';
import ListSongs from './index'

describe('ListSong Component', () => {
    it('add song input should be render on the document', () => {
        render(<ListSongs />);
        const title = screen.getByText('List your favorite songs here...')
        expect(title).toBeInTheDocument();
    });

    it('the sort button should not be on the page when the component is load', () => {
        render(<ListSongs />);
        const button = screen.queryByText('button')
        expect(button).not.toBeInTheDocument();
    });
  });