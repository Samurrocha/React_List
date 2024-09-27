import { useState } from 'react';

function Form() {
  const [feedback, setFeedback] = useState({
    name: '',
    rating: 5,
    comments: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFeedback(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for your feedback, ${feedback.name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Name:
        <input 
          type="text" 
          name="name" 
          value={feedback.name} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Coffee Rating (1-5):
        <input 
          type="number" 
          name="rating" 
          min="1" 
          max="5" 
          value={feedback.rating} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Additional Comments:
        <textarea 
          name="comments" 
          value={feedback.comments} 
          onChange={handleChange} 
        />
      </label>
      <input type="submit" value="Submit Feedback" />
    </form>
  );
}


export default Form
