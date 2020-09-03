import React from 'react';
import { render, screen } from '@testing-library/react';
import NominateBtn from '../NominateBtn';

// UNIT TESTING
describe('NominateBtn', () => {
    test('nominateBtn should be disabled if isDisabled is true', () => {
        render(<NominateBtn nominateMovie={() => {}} movieId="movieId" isDisabled={true} text="text"/>);
        screen.debug();
        expect(screen.getByRole('button')).toBeDisabled();
    })
})
