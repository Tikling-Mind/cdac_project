import React from 'react';

function FAQPage() {
  const faqs = [
    {
      question: 'What is a tiffin delivery service?',
      answer: 'A tiffin delivery service provides home-cooked meals that are delivered to your doorstep.'
    },
    {
      question: 'How do I place an order?',
      answer: 'You can place an order through our website or mobile app by selecting your desired tiffin and delivery options.'
    },
    {
      question: 'What\'s the delivery area?',
      answer: 'We currently deliver to Pune city and its surrounding areas. You can check the delivery coverage on our website.'
    },
    {
      question: 'Are the meals customizable?',
      answer: 'Yes, we offer customizable meal options to cater to dietary preferences and restrictions. You can choose from our menu and make specific requests.'
    },
    {
      question: 'Is the packaging eco-friendly?',
      answer: 'Yes, we use eco-friendly and sustainable packaging materials to minimize our environmental impact.'
    },
    {
      question: 'What are the delivery charges?',
      answer: 'Delivery charges may vary based on your location and order size. You can find detailed information about delivery charges during checkout.'
    },
    {
      question: 'How often can I receive tiffin deliveries?',
      answer: 'You can choose to receive daily, weekly, or monthly tiffin deliveries, depending on your preferences.'
    },
    {
      question: 'Can I pause or cancel my subscription?',
      answer: 'Yes, you can pause or cancel your subscription at any time through your account settings on our website.'
    },
    {
      question: 'Are the ingredients fresh?',
      answer: 'Absolutely, we source fresh and locally sourced ingredients to ensure the quality and taste of our tiffin meals.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach our customer support team through the "Contact Us" section on our website or by calling our dedicated support number.'
    }
  ];

  return (
    <div className="faq-page">
      <h3>Frequently Asked Questions</h3>
      <br></br>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <h5 className="question">{`${index + 1}. ${faq.question}`}</h5>
            <p className="answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
