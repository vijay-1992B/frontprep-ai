import FeatureCard from "./FeatureCard";
import SectionHeader from "../common/SectionHeader";

const features = [
  {
    title: "Real Interview Questions",
    icon: "🎯",
    description: "Practice questions similar to real frontend interviews.",
  },
  {
    title: "AI Feedback",
    icon: "🤖",
    description: "Receive instant feedback and suggestions.",
  },
  {
    title: "Progress Tracking",
    icon: "📈",
    description: "Monitor your improvement over time.",
  },
  {
    title: "Mock Interviews",
    icon: "⚡",
    description: "Experience AI-powered interview sessions.",
  },
];

const Features = () => {
  return (
    <section className="w-full py-16 ">
      <div className="max-w-7xl mx-auto p-4">
        <SectionHeader
          title="Features"
          description="Everything you need to prepare for frontend interviews."
        />

        <div className="mt-10 grid grid-cols-2 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
