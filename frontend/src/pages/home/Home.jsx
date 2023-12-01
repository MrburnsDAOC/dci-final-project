import React from "react";
import Carousel from "../../components/Carousel";
// import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <section>
        <h1>Tierschutzverein Dachau e.V.</h1>
        {/* Infotext: */}
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
        <div>{/* to do: wie speisen? */}</div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default Home;
