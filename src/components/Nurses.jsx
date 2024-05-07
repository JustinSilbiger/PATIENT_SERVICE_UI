import { useLocation } from "react-router-dom";


const Nurses = () => {
  let location = useLocation();
  if (location.pathname === "/nurses") {
    return (
      <>
        <h1>Nurses</h1>
      </>
    );
  }
};
export default Nurses;