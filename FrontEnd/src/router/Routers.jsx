import Assists from "../pages/Assists";
import GeneralAssist from "../components/GeneralAssist";
import ClassAssist from "../components/ClassAssist";

export let Routers = [
  {
    path: "/",
    element: <Assists />,
  },
  {
    path: "/general-assist",
    element: <GeneralAssist />,
  },
  {
    path: "/class-assist",
    element: <ClassAssist />,
  },
];