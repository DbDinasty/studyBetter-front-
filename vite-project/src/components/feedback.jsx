import React, { useState } from 'react';

export default function FeedbackForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут ви можете додати логіку для відправки відгуку на сервер або будь-яку іншу обробку
    console.log('Відгук:', feedback);
    setFeedback('');
    setIsOpen(false);
  };

  return (
    <div>
      <div className="feedback-widget" onClick={toggleForm}>
        &#9993;
      </div>
      {isOpen && (
        <div className={`feedback-form ${isOpen ? 'open' : ''}`}>
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Введіть ваш відгук або запитання..."
              value={feedback}
              onChange={handleFeedbackChange}
            ></textarea>
            <button type="submit">Надіслати</button>
          </form>
        </div>
      )}
    </div>
  );
}