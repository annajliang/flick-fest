import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchMovie from '../SearchMovie';

// UNIT TESTING
it('user types in input and it appears', () => {
    render(<SearchMovie handleSubmit={() => {}} handleChange={() => {}} userInput="userInput" />);
    screen.debug();
    expect(screen.getByRole('searchbox')).toHaveValue('userInput');
}) 
