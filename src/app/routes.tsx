import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { ResidentDashboard } from "./pages/ResidentDashboard";
import { VolunteerDashboard } from "./pages/VolunteerDashboard";
import { NeighborhoodCouncil } from "./pages/NeighborhoodCouncil";
import { NeighborhoodFund } from "./pages/NeighborhoodFund";
import { ReportIssue } from "./pages/ReportIssue";
import { Events } from "./pages/Events";
import { Impact } from "./pages/Impact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/resident",
    Component: ResidentDashboard,
  },
  {
    path: "/volunteer",
    Component: VolunteerDashboard,
  },
  {
    path: "/council",
    Component: NeighborhoodCouncil,
  },
  {
    path: "/fund",
    Component: NeighborhoodFund,
  },
  {
    path: "/report",
    Component: ReportIssue,
  },
  {
    path: "/events",
    Component: Events,
  },
  {
    path: "/impact",
    Component: Impact,
  },
]);
