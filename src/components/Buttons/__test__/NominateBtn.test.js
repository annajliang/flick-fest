import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import NominateBtn from '../NominateBtn';

afterEach(cleanup);

it('should be enabled', () => {
    const { getByTestId } = render(<NominateBtn />);
    fireEvent.click(getByTestId('nominateBtn'))
    expect(getByTestId('nominateBtn')).not.toHaveAttribute('disabled')
});