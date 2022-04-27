import { render, screen } from '@testing-library/react';
import Signup from  './Signup'

test('renders an image', () => {
    render (<Signup/>)
    const signupImage = document.querySelector('img') ;
    expect(signupImage.src).toContain('Ideas');
})

test('renders title text', () => {
    render (<Signup/>)
    const titleText = screen.getAllByText(/Sign Up/i)
    expect(titleText[0]).toBeInTheDocument()
    expect(titleText[1]).toBeInTheDocument()
})

test('renders username input field', () => {
    render (<Signup/>)
    const usernameText = screen.getByPlaceholderText(/Username/i)
    expect(usernameText).toBeInTheDocument()
})

test('renders email address input field', () => {
    render (<Signup/>)
    const emailText = screen.getByPlaceholderText(/email address/i)
    expect(emailText).toBeInTheDocument()
})

test('renders password input field', () => {
    render (<Signup/>)
    const passwordText = screen.getByPlaceholderText(/password/i)
    expect(passwordText).toBeInTheDocument()
})

test('renders a sign up button', () => {
    render(<Signup/>)
    const signupButton = screen.getByRole('button')
    expect(signupButton).toBeInTheDocument()
    
})