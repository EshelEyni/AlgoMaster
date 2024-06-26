import { FC } from "react";
import { useNavigate } from "react-router-dom";

type PageTitleProps = {
  title: string;
};

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  const navigate = useNavigate();

  function onGoToHomePage() {
    navigate("/Home");
  }

  return (
    <div className="flex justify-between items-center my-4 px-12">
      <h1 className="text-5xl font-semibold text-gray-900">{title}</h1>;
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onGoToHomePage}
      >
        Go to Home
      </button>
    </div>
  );
};
