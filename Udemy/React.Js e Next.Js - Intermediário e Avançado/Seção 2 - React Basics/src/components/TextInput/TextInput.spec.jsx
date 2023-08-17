import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'test'} />);

    const input = screen.getByPlaceholderText(/what are you looking for?/i);
    expect(input.value).toBe('test');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    const value = 'lorem ipsum';

    render(<TextInput handleChange={fn} searchValue={value} />);

    const input = screen.getByPlaceholderText(/what are you looking for?/i);

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} />);
    expect(container).toMatchSnapshot();
  });
});
