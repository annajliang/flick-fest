// Smooth scroll helper functions

export const scrollToSearch = (ref) => {
  const y = ref.current.getBoundingClientRect().top + window.pageYOffset - 90;

  window.scrollTo({ top: y, behavior: "smooth" });
};

export const scrollToResults = () => {
  const searchHeader = document.querySelector("#searchHeader");

  const searchContainerHeight = document.querySelector("#searchContainer").clientHeight;
  const stickyNavHeight = document.querySelector("#stickyNav").clientHeight;
  const yOffset = 90;

  const y =
    searchHeader.getBoundingClientRect().top +
    window.pageYOffset +
    (searchContainerHeight + stickyNavHeight - yOffset);

  window.scrollTo({ top: y, behavior: "smooth" });
};
