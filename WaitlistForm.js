
import { useState } from 'react';

const WaitlistForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      console.log(`Added to waitlist: ${name}`);
      // Here, you can add an API call to add the name to the waitlist
      setName(''); // Clear the input field after submission
    } else {
      alert('Please enter your name.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2>Join the Waitlist</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          required
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default WaitlistForm;