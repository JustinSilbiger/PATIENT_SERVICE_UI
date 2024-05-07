import { useLocation } from "react-router-dom";


const Appointments = () => {
  let location = useLocation();
  if (location.pathname === "/appointments") {
    return (
      <>
        <h1>Appointments</h1>
      </>
    );
  }
};
export default Appointments;