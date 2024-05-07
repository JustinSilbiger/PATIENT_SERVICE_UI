import { useLocation } from "react-router-dom";
import { PhysicianService } from '..//utils/api';
import {  useState, useEffect} from 'react';
import PhysicianList from "./PhysiciansList";


const Physicians = () => {
  let location = useLocation();
  if (location.pathname === "/physicians") {
    return (
      <>
        <h1>Physicians</h1>
        <PhysicianList />
      </>
    );
  }
};
export default Physicians;