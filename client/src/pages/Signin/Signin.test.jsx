import { render, screen } from '@testing-library/react';
import Signin from  './Signin'

test('renders an image', () => {
    render (<Signin/>)
    const signinImage = document.querySelector('img') ;
    expect(signinImage.src).toContain('Ideas');
})

test('renders title text', () => {
    render (<Signin/>)
    const titleText = screen.getAllByText(/Sign In/i)
    expect(titleText[0]).toBeInTheDocument()
    expect(titleText[1]).toBeInTheDocument()
})


test('renders email address input field', () => {
    render (<Signin/>)
    const emailText = screen.getByPlaceholderText(/email address/i)
    expect(emailText).toBeInTheDocument()
})

test('renders password input field', () => {
    render (<Signin/>)
    const passwordText = screen.getByPlaceholderText(/password/i)
    expect(passwordText).toBeInTheDocument()
})

test('renders a sign up button', () => {
    render(<Signin/>)
    const signinButton = screen.getByRole('button')
    expect(signinButton).toBeInTheDocument()
    
})