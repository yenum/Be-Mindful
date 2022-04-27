import { fireEvent, render, screen } from '@testing-library/react';
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

test('password field should be empty', () => {
    render (<Signup/>)
    const passwordText = screen.getByPlaceholderText(/password/i)
    expect(passwordText.value).toBe("")
})

test('email address field should be empty', () => {
    render (<Signup/>)
    const emailText = screen.getByPlaceholderText(/email address/i)
    expect(emailText.value).toBe("")
})

test('username field should be empty', () => {
    render (<Signup/>)
    const usernameText = screen.getByPlaceholderText(/username/i)
    expect(usernameText.value).toBe("")
})

test('button should be disabled', () => {
    render(<Signup/>)
    const signupButton = screen.getByRole('button')
    expect(signupButton).toBeDisabled()
    
})

test('error message should not be visible', () => {
    render(<Signup/>)
    const errorMessage = screen.getByTestId('error')
    expect(errorMessage).not.toBeVisible()
    
})

test('password field should change', () => {
    render (<Signup/>)
    const passwordText = screen.getByPlaceholderText(/password/i)
    const testValue = 'test'

    fireEvent.change(passwordText, {target: {value:testValue}})
    expect(passwordText.value).toBe(testValue)
})

test('email address field should change', () => {
    render (<Signup/>)
    const emailText = screen.getByPlaceholderText(/email address/i)
    const testValue = 'test'

    fireEvent.change(emailText, {target: {value:testValue}})
    expect(emailText.value).toBe(testValue)
    
})

test('username field should change', () => {
    render (<Signup/>)
    const usernameText = screen.getByPlaceholderText(/username/i)
    const testValue = 'test'

    fireEvent.change(usernameText, {target: {value:testValue}})
    expect(usernameText.value).toBe(testValue)
})

test('button should not be disabled when input is entered', () => {
    render(<Signup/>)
    const signupButton = screen.getByRole('button')
    const usernameText = screen.getByPlaceholderText(/username/i)
    const emailText = screen.getByPlaceholderText(/email address/i)
    const passwordText = screen.getByPlaceholderText(/password/i)

    const testValue = 'test'

    fireEvent.change(usernameText, {target: {value:testValue}})
    fireEvent.change(emailText, {target: {value:testValue}})
    fireEvent.change(passwordText, {target: {value:testValue}})


    expect(signupButton).not.toBeDisabled()
    
})