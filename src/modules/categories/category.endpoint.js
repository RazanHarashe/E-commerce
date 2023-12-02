const roles = {
  Admin: "Admin",
  User: "User",
};

export const endPoint = {
  create: [roles.Admin],
  getAll: [roles.Admin],
  update: [roles.Admin],
  delete: [roles.Admin],
};
