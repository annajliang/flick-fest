import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchMovie from '../SearchMovie';

// UNIT TESTING
describe('SearchMovie', () => {
    test('userInput prop should be rendered into the searchbox', () => {
        render(<SearchMovie handleSubmit={() => {}} handleChange={() => {}} userInput="userInput" />);
        screen.debug();
        expect(screen.getByRole('searchbox')).toHaveValue('userInput');
    }) 
})
