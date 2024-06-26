export const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  window.scrollTo({
    top: element.offsetTop,
    behavior: "smooth",
  });
};
