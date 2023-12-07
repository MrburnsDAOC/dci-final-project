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

const routes = [
  { path: "/", element: <Home />, id: 1 },
  { path: "/über-uns", element: <UeberUns />, id: 2 },
  { path: "/über-uns/text", element: <UeberUnsText />, id: 2.1 },
  { path: "/tiervermittlung", element: <Tiervermittlung />, id: 3 },
  {
    path: "/tiervermittlung/notfall-vermittlung",
    element: <NotfallVermittlung />,
    id: 3.1,
  },
  { path: "/spenden", element: <Spenden />, id: 4 },
  { path: "/termine", element: <Termine />, id: 5 },
  { path: "/kontakt", element: <Kontakt />, id: 6 },
  { path: "/impressum", element: <Impressum />, id: 7 },
  { path: "*", element: <NotFound />, id: 8 },
];

export default routes;
