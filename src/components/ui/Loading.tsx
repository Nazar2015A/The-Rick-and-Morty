import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="py-36 flex justify-center items-center">
      <ImSpinner2 className="w-10 h-10 animate-spin" />
    </div>
  );
};

export default Loading;
