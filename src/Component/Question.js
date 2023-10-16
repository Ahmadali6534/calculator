import React, { useState } from 'react';
import { faqs } from './Data';
import './Question.css'

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div>

      <ul>
        
        {faqs.map((faq, index) => (
          <center>
          <div className='faq'>
            <p key={faq.id}>
            <div id='question' onClick={() => handleToggle(index)}>
              <strong>{faq.question}</strong>
              {expandedIndex === index ? '▲' : '▼'}
            </div>
            {expandedIndex === index && <p>{faq.answer}</p>}
            
          </p>
          </div>
          </center>
        ))}
        
      </ul>
    </div>
  );
};

export default FAQ;
