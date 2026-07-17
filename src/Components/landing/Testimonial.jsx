import SectionHeader from "../common/SectionHeader";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    rating: "⭐⭐⭐⭐⭐",
    review:
      "I felt much more prepared for my technical interviews after using FrontPrep AI.",
    name: "Vijay",
    jobTitle: "Frontend Engineer",
    avatar: "👳‍♀️",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    review:
      "FrontPrep AI helped me practice frontend interviews with confidence.The AI feedback was detailed and helped me improve.",
    name: "Priya",
    jobTitle: "Frontend Engineer",
    avatar: "🙋‍♂️",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    review: "Very good platform for frontend interview preparation",
    name: "Anjali",
    jobTitle: "Frontend Engineer",
    avatar: "🙋‍♂️",
  },
];

const Testimonial = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto p-4  ">
        <SectionHeader
          title="Testimonials"
          description="See what developers say about FrontPrep AI."
        />
        <div className="pt-6 grid grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
