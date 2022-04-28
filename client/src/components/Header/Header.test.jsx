import {  render, screen } from '@testing-library/react';
import Header from './Header'

test('renders a welcome message', () => {
    render (<Header/>)
    const welcomeMessage = screen.getByText(/Welcome to Idea Pad!/i);
    expect(welcomeMessage).toBeInTheDocument()
})

test('renders a log out text', () => {
    render (<Header/>)
    const logoutText = screen.getByText(/Log Out/i);
    expect(logoutText).toBeInTheDocument()
    
    
})