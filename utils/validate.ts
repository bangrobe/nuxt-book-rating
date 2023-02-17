export const validateEmail = (text: string) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (text.match(emailRegex)) {
    return true;
  }
  return false;
};
export const validateSize = (file: File) => {
  if (!file) return;
  // if greater than 5MB
  if (file.size > 5000000) {
    return true;
  }
  return false;
};

const getExtension = (filename: string) => {
  const parts = filename.split(".");
  return parts[parts.length - 1];
};

export const isImage = (filename: string) => {
  const ext = getExtension(filename);
  switch (ext.toLowerCase()) {
    case "jpg":
    case "gif":
    case "bmp":
    case "png":
    case "jpeg":
      return true;
    default:
      return false;
  }
};
