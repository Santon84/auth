import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "auto auto",
  borderColor: "red",
  
};

function Spinner() {
  return (
    <ClipLoader
        size={100}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default Spinner
