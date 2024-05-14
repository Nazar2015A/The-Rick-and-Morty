import { Link } from "react-router-dom";
import { ROUTER_CONSTS } from "../consts/route.consts";

const NotFound = () => {
  return (
    <div className="grid h-full place-content-center bg-white px-4 py-8 select-none">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We can't find that page.</p>

        <Link
          to={ROUTER_CONSTS.HOME}
          className="mt-6 inline-block rounded bg-black select-none px-5 py-3 text-sm font-medium text-white hover:bg-black/80 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
