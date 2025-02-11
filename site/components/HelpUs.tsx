import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

//@ts-ignore
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <p className="px-6 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "How much does it cost?",
      answer:
        "It’s completely free to attend! We’ll have tasty meals, snacks and drinks. We also have travel stipends to cover flights for leaders who live far away from San Francisco. Make sure to complete the 8-week course to be eligible for a stipend!",
    },
    {
      question: "Am I eligible to participate in Multiverse?",
      answer:
        "Any Hack Club leader is welcome to participate! Not a Hack Club leader yet? Apply at hackclub.com/clubs today!",
    },
    {
      question: "What do I need to pack for Multiverse?",
      answer:
        "You should bring laptops, chargers, toiletries, sleeping bags, a water bottle and your hacker spirit! A packing list will be provided closer to the event.",
    },
    {
      question: "What is Multiverse and what are we building?",
      answer:
        "Multiverse is an 8-week course on how to build and prototype a collaborative and technical full club YSWS, Club project, or workshop. Once prototyped and run  at a meeting, SuperLeaders will be eligible for travel stipends to come to San Francisco for a 3-day gathering & hackathon where you can work together to get feedback and build your final resource to publish it to the entire clubs community!",
    },
    {
      question: "Where is Multiverse?",
      answer:
        "The in person event will be held in San Francisco and more details will be released as we get closer to the event!",
    },
    {
      question: "Are there sleeping arrangements?",
      answer:
        "Yes there are! On the night of the event, we will have gender separated rooms and a supervised sleeping area with dimmed lights and minimal sound for a good sleep. Make sure to bring a sleeping bag & pillow!",
    },
    {
      question: "Where can I reach out if I have more questions?",
      answer:
        "Feel free to reach out on #multiverse in the Hack Club Slack or email the team at multiverse@hackclub.com!",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg mt-4">
      {/* <h2 className="text-2xl font-bold text-gray-900 p-6 border-b border-gray-200">
        Frequently Asked Questions
      </h2> */}
      <div className="divide-y divide-gray-200">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export const HelpUs = () => {
  return (
    <div className="border-t-8 border-black p-4 pt-8">
      <h1 className="graveyard text-5xl text-center">Additional Information</h1>
      <FAQ />
    </div>
  );
};
