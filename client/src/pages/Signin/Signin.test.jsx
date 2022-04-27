import { fireEvent, render, screen } from '@testing-library/react';
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

test('password field should be empty', () => {
    render (<Signin/>)
    const passwordText = screen.getByPlaceholderText(/password/i)
    expect(passwordText.value).toBe("")
})

test('email address field should be empty', () => {
    render (<Signin/>)
    const emailText = screen.getByPlaceholderText(/email address/i)
    expect(emailText.value).toBe("")
})

test('renders a sign in button', () => {
    render(<Signin/>)
    const signinButton = screen.getByRole('button')
    expect(signinButton).toBeInTheDocument()
    
})

test('button should be disabled', () => {
    render(<Signin/>)
    const signinButton = screen.getByRole('button')
    expect(signinButton).toBeDisabled()
    
})

test('error message should not be visible', () => {
    render(<Signin/>)
    const errorMessage = screen.getByTestId('error')
    expect(errorMessage).not.toBeVisible()
    
})

test('password field should change', () => {
    render (<Signin/>)
    const passwordText = screen.getByPlaceholderText(/password/i)
    const testValue = 'test'

    fireEvent.change(passwordText, {target: {value:testValue}})
    expect(passwordText.value).toBe(testValue)
})

test('email address field should change', () => {
    render (<Signin/>)
    const emailText = screen.getByPlaceholderText(/email address/i)
    const testValue = 'test'

    fireEvent.change(emailText, {target: {value:testValue}})
    expect(emailText.value).toBe(testValue)
    
})


test('button should not be disabled when input is entered', () => {
    render(<Signin/>)
    const signinButton = screen.getByRole('button')
    const emailText = screen.getByPlaceholderText(/email address/i)
    const passwordText = screen.getByPlaceholderText(/password/i)

    const testValue = 'test'

    fireEvent.change(emailText, {target: {value:testValue}})
    fireEvent.change(passwordText, {target: {value:testValue}})


    expect(signinButton).not.toBeDisabled()
    
})