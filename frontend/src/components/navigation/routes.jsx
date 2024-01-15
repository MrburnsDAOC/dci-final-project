import Home from "../../pages/home/Home";
import UeberUns from "../../pages/ueberUns/UeberUns";
import Tiervermittlung from "../../pages/tiervermittlung/Tiervermittlung";
import Spenden from "../../pages/spenden/Spenden";
import Termine from "../../pages/termine/Termine";
import Kontakt from "../../pages/kontakt/Kontakt";
import Impressum from "../../pages/impressum/Impressum";
import NotFound from "../../pages/notFound/NotFound";
import UeberUnsText from "../../pages/ueberUns/UeberUnsText.jsx";
import NotfallVermittlung from "../../pages/tiervermittlung/notfallvermittlung/NotfallVermittlung";
import Presse from "../../pages/presse/Presse.jsx";
import Hunde from "../../pages/tiervermittlung/hunde/Hunde";
import Katzen from "../../pages/tiervermittlung/katzen/Katzen";
import Nagetiere from "../../pages/tiervermittlung/nagetiere/Nagetiere";
import Wellensittiche from "../../pages/tiervermittlung/wellensittiche/Wellensittiche";
import VermittelteTiere from "../../pages/tiervermittlung/vermittelteTiere/VermittelteTiere";
import SonstigeTiere from "../../pages/tiervermittlung/sonstigeTiere/SonstigeTiere";

const routes = [
  { path: "/", element: <Home />, id: 1 },
  { path: "/über-uns", element: <UeberUns />, id: 2 },
  { path: "/über-uns/text", element: <UeberUnsText />, id: 2.1 },
  { path: "/über-uns/presse", element: <Presse />, id: 2.2 },

  { path: "/tiervermittlung", element: <Tiervermittlung />, id: 3 },
  {
    path: "/tiervermittlung/notfall-vermittlung",
    element: <NotfallVermittlung />,
    id: 3.1,
  },
  {
    path: "/tiervermittlung/hunde",
    element: <Hunde />,
    id: 3.2,
  },
  {
    path: "/tiervermittlung/katzen",
    element: <Katzen />,
    id: 3.3,
  },
  {
    path: "/tiervermittlung/nagetiere",
    element: <Nagetiere />,
    id: 3.4,
  },
  {
    path: "/tiervermittlung/wellensittiche",
    element: <Wellensittiche />,
    id: 3.5,
  },

  {
    path: "/tiervermittlung/sonstige-tiere",
    element: <SonstigeTiere />,
    id: 3.6,
  },
  {
    path: "/tiervermittlung/vermittelte-tiere",
    element: <VermittelteTiere />,
    id: 3.7,
  },
  { path: "/spenden", element: <Spenden />, id: 4 },
  { path: "/presse", element: <Presse />, id: 5 },

  { path: "/termine", element: <Termine />, id: 6 },
  { path: "/kontakt", element: <Kontakt />, id: 7 },
  { path: "/impressum", element: <Impressum />, id: 8 },
  { path: "*", element: <NotFound />, id: 9 },
];

export default routes;
