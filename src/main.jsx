import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Contacts from "./pages/Contacts";
import Invoices from "./pages/Invoices";
import ProfileForm from "./pages/ProfileForm";
import Calendar from "./pages/Calendar";
import FAQPage from "./pages/FAQPage";
import BarChart from "./pages/BarChart";
import PieChart from "./pages/PieChart";
import TimeLineChart from "./pages/TimeLineChart";
import GeographyChart from "./pages/GeographyChart";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<ProfileForm />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/bar" element={<BarChart />} />
      <Route path="/pie" element={<PieChart />} />
      <Route path="/line" element={<TimeLineChart />} />
      <Route path="/geography" element={<GeographyChart />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
