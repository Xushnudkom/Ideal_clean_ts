import React from "react";
import DashboardCustomizeRoundedIcon from 'mui/icons-material/DashboardCustomizeRoundedIcon'
import DryCleaningIcon from 'mui/icons-material/DryCleaningIcon'

interface Route {
  path: string;
  content: string;
  icon: React.ReactElement;
}

const routes: Route[] = [
  {
    path: "/main",
    content: "Asosiy",
    icon: <DashboardCustomizeRoundedIcon />
  },
  {
    path: "/main/orders",
    content: "Buyurtmalar",
    icon: <DryCleaningIcon/>
  },
  {
    path: "/main/services",
    content: "Xizmatlar",
    icon: <DryCleaningIcon />
  },
  {
    path: "/main/single",
    content: "Single",
    icon: <DryCleaningIcon />
  },
];

export default routes;
