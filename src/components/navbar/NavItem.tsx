import { FunctionComponent } from "react";
interface NavLink {
  link: string;
  whereTo: string;
  onNavClick: Function;
}

export const NavItem: FunctionComponent<NavLink> = (props) => {
  return (
    <li
      onClick={() => {
        props.onNavClick(props.link);
      }}
    >
      <button className="px-2 focus:outline-none focus:text-white sm:text-lg text-white cursor-pointer hover:text-blue-400">
        {props.whereTo}
      </button>
    </li>
  );
};
