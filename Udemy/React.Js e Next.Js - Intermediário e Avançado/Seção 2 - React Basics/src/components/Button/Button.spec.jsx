import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '.';

describe('<Button />', () => {
  it('should render the button with the text "Load Posts"', () => {
    render(<Button text="Load Posts" />);

    const button = screen.getByRole('button', { name: /load posts/i });
    expect(button).toBeInTheDocument();
  });

  it('should call the function on click', () => {
    const fn = jest.fn();
    render(<Button text="Load Posts" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load posts/i });

    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    render(<Button text="Load Posts" disabled={true} />);

    const button = screen.getByRole('button', { name: /load posts/i });

    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();

    render(<Button text="Load Posts" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load posts/i });
    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();

    const { container } = render(<Button text="Load Posts" disabled={false} onClick={fn} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
