export const handleDownloadCv = (CvLink, CVName) => {
  fetch(CvLink, {
    headers: {
      Origin: window.location.origin,
    },
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = CVName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => console.error(error));
};
