import { LuArrowRight } from "react-icons/lu";

const ActionCard = ({ icon, title, description }) => {
  return (
    <div className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>

          <h3 className="text-lg font-semibold">{title}</h3>
        </div>

        <LuArrowRight className="text-xl text-gray-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600" />
      </div>

      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ActionCard;
