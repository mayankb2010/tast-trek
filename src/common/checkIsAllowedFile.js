export const checkIsAllowedFileType = (type) =>
  ["image/jpeg", "image/png"].includes(type);

export const checkIsAllowedFileSize = (size) => size <= 2 * 1024 * 1024;
