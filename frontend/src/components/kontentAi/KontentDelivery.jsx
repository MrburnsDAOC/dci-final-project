// import { createDeliveryClient } from "@kontent-ai/delivery-sdk";
// import { useEffect } from "react";

// const KontentDelivery = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       const deliveryClient = createDeliveryClient({
//         environmentId: "",
//       });

//       const response = await deliveryClient.items().toPromise();
//       console.log(response.data.items);
//       setProjectsData(response.data.items);
//     };
//     fetchData();
//   }, []);

// initialize delivery client
// const deliveryClient = createDeliveryClient({
//     environmentId: "<YOUR_ENVIRONMENT_ID>",
//   });

//   // fetch items
//   const response = await deliveryClient.items<Movie>().type('<CONTENT_TYPE_CODENAME>').toPromise();

//   // read data of first item
//   const movieText = response.data.items[0].elements.title.value;

//   return <div>KontentDelivery</div>;
// };

// export default KontentDelivery;
