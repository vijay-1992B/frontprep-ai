import SectionHeader from "../common/SectionHeader";
import FaqCard from "./FaqCard";

const faqs = [
  {
    question: "What is FrontPrep AI?",
    answer:
      "FrontPrep AI is an AI-powered platform that helps developers prepare for frontend interviews.",
  },
  {
    question: "Is FrontPrep AI free to use?",
    answer:
      "Yes, you can start practicing for free. Additional premium features may be available later.",
  },
  {
    question: "Which technologies are covered?",
    answer:
      "HTML, CSS, JavaScript, React, Tailwind CSS, and other frontend technologies.",
  },
  {
    question: "Do I receive AI feedback?",
    answer:
      "Yes, after completing mock interviews you'll receive AI-generated feedback to improve your performance.",
  },
];

const FAQ = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto  ">
        <SectionHeader title="Frequently Asked Questions" />
        <div className="pt-6 space-y-4">
          {faqs.map((faq) => (
            <FaqCard key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
