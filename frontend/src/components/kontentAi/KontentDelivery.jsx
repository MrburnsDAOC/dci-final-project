import { createDeliveryClient } from "@kontent-ai/delivery-sdk";
import { useEffect, useState } from "react";
import DataContext from "./DataContext";
// import { compareDates } from "../compareDates";

// Kontent.ai data: used in Layout.jsx

const compareDates = (a, b) => {
  const dateA = new Date(a.elements.datum.value);
  const dateB = new Date(b.elements.datum.value);
  return dateA - dateB;
};

// eslint-disable-next-line react/prop-types
const KontentDelivery = ({ children }) => {
  const id = import.meta.env.VITE_ENVIRONMENTID;
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const deliveryClient = createDeliveryClient({
        environmentId: id,
      });

      //   const response = await deliveryClient.items().type("tier").toPromise();
      const response = await deliveryClient.items().toPromise();

      setData(response.data.items);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSortedData = (filter) => {
    if (!data) return [];
    return data.filter(filter).sort(compareDates).reverse();
  };

  return (
    <DataContext.Provider value={{ data, getSortedData }}>
      {children}
    </DataContext.Provider>
  );
};

export default KontentDelivery;
