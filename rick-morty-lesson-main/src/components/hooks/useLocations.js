import { useState, useEffect } from "react";
import { fetchLocations } from "../api";

export const useLocations = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetchLocations().then((data) => {
      setLocations(data);
    });
  }, []);

  return { locations };
};