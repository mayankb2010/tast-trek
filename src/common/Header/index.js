import { useLocation } from "react-router-dom";
import { Heading, GoBackLink, GoBackIcon } from "./styled";

const Header = ({ heading, optionalContent }) => {
  const { pathname } = useLocation();

  return (
    <header>
      <Heading inHome={pathname === "/"}>{heading}</Heading>
      {optionalContent && (
        <GoBackLink to="/tasks">
          <GoBackIcon />
        </GoBackLink>
      )}
    </header>
  );
};

export default Header;
