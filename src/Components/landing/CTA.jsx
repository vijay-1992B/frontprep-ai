import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";

const CTA = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8  ">
        <SectionHeader
          title="Ready to Crack Your Next Frontend Interview?"
          description="Start practicing with AI-powered mock interviews, receive instant feedback, and build the confidence to land your dream frontend job."
        />
        <Button>Start Free Interview</Button>
      </div>
    </section>
  );
};

export default CTA;
