/* Summary: This is a React functional component that renders a form for users to contact us. When the 
user submits the form, the component logs the form data to the console, then clears the input fields, 
and shows a confirmation message. */

import React, { useState } from 'react'; // Import useState hook from React

/* useState manages the state of variables. The first four (names,email and message) var are initialized 
as empty strings.The last variable (formSubmitted) is initialized as false. The useState returns an array 
with two values (the current state and a function that updates it). Eg. setFirstName is a function that 
updates the firstName variable. The value of the firstName variable is then set to the value of the input. 
*/ 
const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage]=useState('');

    /* By default, the form will be submitted to the URL of the page where the form is located.
    We can prevent this default behavior by calling the event.preventDefault() method in the 
    handleSubmit function.*/ 

  const handleSubmit = (event) => {
    event.preventDefault();

  

  // check if firstname and lastname are empty, if so, alert user 
  if (!firstName.trim() || !lastName.trim()) {
    setErrorMessage('Names cannot be empty.');
    return;
  }

// Error handling/Validate form data: email needs to contain @, otherwise, show error messages
if (!email.includes('@')) {
  setErrorMessage('Please enter a valid email address.');
  return;
}

  // check if message is at last 10 characters, if not, alert user
  const words = message.split(' ');
    if (words.length < 10) {
      setErrorMessage('Please enter a message that is at least 10 words long.');
      return;
    }

    // logs form data to the console 
    console.log({
      firstName,
      lastName,
      email,
      message
    });
    
    // Clear form after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setMessage('');

    // Show confirmation message
    setFormSubmitted(true);
  };

  return (
    <div id="contact">
        <h2>Contact Us: </h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="message">Leave your message here:</label>
                <textarea
                id="message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                />
            </div>
           
            {errorMessage && <p className="error">{errorMessage}</p>}
            
            <button type="submit" onClick={handleSubmit}>Submit</button>
            {formSubmitted && <p>Thank you, your message has been submitted.</p>}
        
        </form>
    </div>
  );
};
// Export the component so that it can be imported in other files 
export default ContactUs;
