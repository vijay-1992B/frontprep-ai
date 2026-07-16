import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="  max-w-7xl mx-auto  px-4 py-6 flex justify-between items-center min-h-[80vh]">
        <div className="max-w-xl ">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            🚀 AI-Powered Interview Preparation
          </div>
          <h1 className="text-5xl font-bold leading-tight mt-6">
            Master Frontend Interviews with AI
          </h1>
          <p className="text-gray-600 mt-6 text-lg leading-7">
            Practice real frontend interview questions, receive instant AI
            feedback, and build the confidence to crack your next interview.
          </p>
          <div className="flex gap-4 mt-8 ">
            <Button variant="primary">Start Free Interview</Button>
            <Button variant="ghost">Learn More</Button>
          </div>
        </div>
        <div className="w-125 h-100 bg-gray-100 rounded-2xl shadow-lg flex items-center justify-center">
          Dashboard Preview
        </div>
      </div>
    </section>
  );
};

export default Hero;
