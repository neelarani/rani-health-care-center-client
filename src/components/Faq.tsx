'use client';
import { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: 'What services does Rani Health Care provide?',
      answer:
        'Rani Health Care provides primary healthcare services, patient consultation, preventive care, and reliable medical support.',
    },
    {
      question: 'Do I need an appointment before visiting?',
      answer:
        'Yes, we recommend booking an appointment in advance to ensure better service and minimal waiting time.',
    },
    {
      question: 'What are your working hours?',
      answer: 'We are open from Saturday to Thursday, 9:00 AM to 9:00 PM.',
    },
    {
      question: 'Is emergency service available?',
      answer:
        'For emergency cases, please contact our phone number immediately for guidance.',
    },
    {
      question: 'How can I contact Rani Health Care?',
      answer:
        'You can reach us via phone, email, or through the contact form on our website.',
    },
  ];

  return (
    <section className=" py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-xl md:text-4xl font-bold text-muted mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-muted/70 max-w-xl mx-auto">
            Find answers to common questions about Rani Health Care services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-muted-foreground/70  rounded-xl shadow border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left cursor-pointer"
              >
                <span className="font-medium text-muted">{faq.question}</span>
                <span className="text-emerald-600 text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-muted/70">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-background text-muted py-10 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-3">Still Have Questions?</h2>
          <p className="text-emerald-100 mb-5">
            Contact Rani Health Care for more information and support.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
