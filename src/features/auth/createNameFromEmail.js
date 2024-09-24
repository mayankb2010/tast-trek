export const createNameFromEmail = (email) => {
  return email
    .split("@")[0]
    .match(/[a-zA-Z0-9]+/g)
    .join("");
};
