import React, { useState } from 'react';
import CUBE from './assets/images/illustration-box-desktop.svg';
import ILL from './assets/images/illustration-woman-online-desktop.svg';
import PATTERN from './assets/images/bg-pattern-desktop.svg';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion">
    <div className="accordion-header" onClick={toggleAccordion}>
      <h2>{title}</h2>
      <span>{isOpen ? '▲' : '▼'}</span>
    </div>
    {isOpen && (
      <div className="accordion-content">
        <p>{content}</p>
      </div>
    )}
    <hr />
  </div>
);
};

function App() {

  const accordionItems = [
    {
      title: 'How many teams members can I invite?',
      content: 'Answer',
    },
    {
      title: 'What is the maximum file upload size?',
      content: 'No more than 2GB. All files in your account must fit your alloted storage.',
    },
    {
      title: 'How do i reset my password?',
      content: 'Answer',
    },
    {
      title: 'How do i reset my password?',
      content: 'Answer',
    },
    {
      title: 'Can i cancel my subscription?',
      content: 'Answer',
    },
    {
      title: 'Do you provide additional support?',
      content: 'Answer',
    },
    
  ];

  return (
    <div className="App">

    <div className="wrapper">

    <div className="container_images">
      <img className='cube' src={CUBE} alt="" />
      <img className='illu' src={ILL} alt="" />
      <img className='pattern' src={PATTERN} alt="" />
    </div>

  <div className="container_accordion">

    <h1>FAQ</h1>
    {accordionItems.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
  </div>

    </div>

    </div>
  );
}

export default App;
