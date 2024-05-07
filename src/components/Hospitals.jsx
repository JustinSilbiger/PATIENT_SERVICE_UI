import { useLocation } from "react-router-dom";

import { HospitalService } from '..//utils/api';

import {  useState, useEffect} from 'react';
import HospitalsList from "./HospitalsList";


const Hospitals = () => {
  let location = useLocation();
  if (location.pathname === "/hospitals") {
    return (
      <>
        <h1>Hospitals</h1>
        <HospitalsList />
      </>
    );
  }
};
export default Hospitals;