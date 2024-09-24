import ReactDOM from "react-dom";
import { LoaderWrapper, Spinner } from "./styled";

const Loader = () => {
  return ReactDOM.createPortal(
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>,
    document.getElementById("loader")
  );
};

export default Loader;
