import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { ROUTER_CONSTS } from "../consts/route.consts";
import Separator from "./ui/Separator";

interface Props extends PropsWithChildren {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <header className="p-4">
        <Link
          to={ROUTER_CONSTS.HOME}
          className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-indigo-500 to-cyan-400 text-transparent bg-clip-text"
        >
          The Rick and Morty
        </Link>
        <Separator />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
