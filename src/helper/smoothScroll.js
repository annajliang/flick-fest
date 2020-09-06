// Smooth scroll helper function
const smoothScroll = (ref) => {
  ref.current.scrollIntoView({ behavior: "smooth" });
}

export default smoothScroll;
