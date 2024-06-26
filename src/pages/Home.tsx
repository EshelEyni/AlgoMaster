import { FC } from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const HomePage: FC = () => {
  const cards = routes.filter((r) => r.title);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">
        Data Structures and Algorithms
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <Link
            key={card.path}
            to={card.path}
            className="bg-gray-100 border border-gray-200 p-4 rounded-md shadow-md hover:shadow-lg"
          >
            <h2 className="text-xl font-bold">{card.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
