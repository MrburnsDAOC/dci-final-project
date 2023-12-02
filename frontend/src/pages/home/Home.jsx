import React from "react";
import Carousel from "../../components/Carousel";
// import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import imgAktuellesOne from "../../assets/imgAktuellesOne.png";
import imgAktuellesTwo from "../../assets/imgAktuellesTwo.png";
import imgAktuellesThree from "../../assets/imgAktuellesThree.png";

const Home = () => {
  // Dummy data "Aktuelles":
  const news = [
    {
      id: 1,
      img: imgAktuellesOne,
      title: "Headline news 1",
      date: "01.12.2023",
    },
    {
      id: 2,
      img: imgAktuellesTwo,
      title: "Headline news 2 ",
      date: "26.11.2023",
    },
    {
      id: 3,
      img: imgAktuellesThree,
      title: "Headline news 3",
      date: "23.11.2023",
    },
  ];
  return (
    <>
      <Navbar />
      <Carousel />
      <section>
        <h1>Tierschutzverein Dachau e.V.</h1>
        {/* Infotext Tierschutzverein Dachau e.V.: */}
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          iusto, quae ex eius sint culpa laborum, architecto a quos iste magnam
          corporis eligendi assumenda! Laborum, non? Animi, est. Temporibus cum,
          in officia esse repellat aspernatur dolore corrupti tenetur quibusdam
          eius, quos nemo voluptatem quod quaerat distinctio doloribus ab quia
          ducimus.
        </p>
        <button>erfahre mehr</button>
      </section>

      {/* Aktuelles: */}
      <section>
        <h2>Aktuelle Meldungen</h2>
        <div className="grid grid-cols-1 gap-2 border-4 border-red-500">
          {/* {news.map(({ id, title, description }) => {
            <div key={id}>
              console.log({id});
              <h3>{title}</h3>
              
              <p>{description}</p>
            </div>;
          })} */}

          {news.map(({ id, img, date, title }) => (
            <div key={id} className={`flex justify-around py-1 rounded-lg`}>
              <img className="w-1/2" src={img} alt={img} />
              <div className="border-4 border-green-500 ">
                <p className="border-4 border-red-500">{date}</p>
                <h3 className="border-4 border-red-500 mt-4 font-semibold">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default Home;
