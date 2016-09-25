import { RouterModule, Routes } from "@angular/router";

import { Home } from "./pages/home";
import { Help } from "./pages/help";

const routes: Routes = [
  { path: "", component: Home },
  { path: "help", component: Help },
];

export const routing = RouterModule.forRoot(routes);
