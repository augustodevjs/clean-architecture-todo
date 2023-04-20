export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const requestFullscreen = () => {
  const element = document.documentElement;
  if (!document.fullscreenElement) {
    element.requestFullscreen();
  }
};

export const exitFullscreen = () => {
  if (document.fullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

export const toggleFullscreen = () => {
  const element = document.documentElement;

  if (document.fullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  } else {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  }
};
