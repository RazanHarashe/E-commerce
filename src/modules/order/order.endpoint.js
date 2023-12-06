import { roles } from "../../middleware/auth.js";

export const endPoints = {
  create: [roles.User],
  cancel:[roles.User],
  get:[roles.User],
  changeStatus:[roles.User],

};