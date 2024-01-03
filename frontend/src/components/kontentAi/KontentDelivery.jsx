import { createDeliveryClient } from "@kontent-ai/delivery-sdk";
import { useEffect, useState } from "react";
import DataContext from "./DataContext";

// Kontent.ai data:
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

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export default KontentDelivery;
