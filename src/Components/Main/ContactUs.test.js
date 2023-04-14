
import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import ContactUs from './ContactUs';

// Test 1: Check if the Contact us form renders without errors 
test('renders ContactUs component without errors', () => {
  render(<ContactUs />);
  const firstNameInput = screen.getByLabelText(/first name:/i);
  const lastNameInput = screen.getByLabelText(/last name:/i);
  const emailInput = screen.getByLabelText(/email:/i);
  const messageInput = screen.getByLabelText(/leave your message here:/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });

  expect(firstNameInput).toBeInTheDocument();
  expect(lastNameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

// Test 2: Check if the setErrorMessage('Names cannot be empty.') function works, 


test('it sets error message when name fields are left blank', () => {
  render(<ContactUs />);
  const submitButton = screen.getByRole('button', { name: /submit/i });
  const firstNameInput = screen.getByLabelText(/first name:/i);
  const lastNameInput = screen.getByLabelText(/last name:/i);

    // Click the submit button without entering any data
    fireEvent.click(submitButton);

  // Verify that an error message is displayed
  const errorMessage = screen.getByText(/Names cannot be empty./i);
  expect(errorMessage).toBeInTheDocument();
});

// Test 3: Test if the setErrorMessage('Please enter a valid email address.') function works

describe('ContactUs component', () => {
  test('displays error message for invalid email address', () => {
    const { getByLabelText, getByText } = render(<ContactUs />);

    // fill out the form with first name, last name and then an invalid email address
    const firstNameInput = getByLabelText('First Name:');
    const lastNameInput = getByLabelText('Last Name:');
    const emailInput = getByLabelText('Email:');
    const submitButton = getByText('Submit');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email-address' } });
    

    fireEvent.click(submitButton);

    //  message is displayed
    const errorMessage = getByText('Please enter a valid email address.');
    expect(errorMessage).toBeInTheDocument();
  });
});

// Test 4 - Check if the setErrorMessage('Please enter a message that is at least 10 words long.') function works

describe('ContactUs', () => {
    it('shows an error message when message is shorter than 10 words', () => {
      const { getByLabelText, getByText } = render(<ContactUs />);
      const messageInput = getByLabelText('Leave your message here:');
      const submitButton = getByText('Submit');
      const firstNameInput = getByLabelText('First Name:');
      const lastNameInput = getByLabelText('Last Name:');
      const emailInput = getByLabelText('Email:');
  
      // enter first name, last name, valid email, than a message shorter than 10 words
      fireEvent.change(firstNameInput, { target: { value: 'John' } });
      fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
      fireEvent.change(emailInput, { target: { value: 'belinda.sunny@gmail.com' } });
      fireEvent.change(messageInput, { target: { value: 'This is a short message.' } });
      fireEvent.click(submitButton);
  
      // assert that error message is displayed
      expect(getByText('Please enter a message that is at least 10 words long.')).toBeInTheDocument();
    });
  });
  






