import { routes } from "./routes";

import ApplicationApi from "./modules/applicationApi";
export const applicationApi = new ApplicationApi(routes.APPLICATION);
