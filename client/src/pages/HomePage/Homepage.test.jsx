import { render, screen } from '@testing-library/react';
import Homepage from './Homepage'

test('renders an image', () => {
    render (<Homepage/>)
    const splashImage = document.querySelector('img') ;
    expect(splashImage.src).toContain('Ideaflow');
})

test('renders title text', () => {
    render (<Homepage/>)
    const titleText = screen.getByText(/Idea Pad/i)
    expect(titleText).toBeInTheDocument()
})

test('renders a description title', () => {
    render(<Homepage/>)
    const description = screen.getByText(/Keep your brilliant ideas in one place/i)
    expect(description).toBeInTheDocument()
})

test('renders a button that reads sign up', () => {
    render(<Homepage/>)
    const signupButtonText = screen.getByText(/Sign Up/i)
    expect(signupButtonText).toBeInTheDocument()
})

test('renders a sign up and sign in button', () => {
    render(<Homepage/>)
    const signupandinButton = screen.getAllByRole('button')
    expect(signupandinButton[0]).toBeInTheDocument()
    expect(signupandinButton[1]).toBeInTheDocument()
})

test('renders a button that reads sign in', () => {
    render(<Homepage/>)
    const signinButtonText = screen.getByText(/Sign In/i)
    expect(signinButtonText).toBeInTheDocument()
})

