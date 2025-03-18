document.addEventListener('DOMContentLoaded', function () {
  const coverSection = document.querySelector('.cover-wrapper');
  const coverImages = document.querySelectorAll('.cover-img');
  const coverList = document.querySelector('.cover-list');
  const coverItems = document.querySelector('.cover-items');

  if (!coverSection) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          coverImages.forEach(image => image.classList.add('in-view'));
        } else {
          coverImages.forEach(image => image.classList.remove('in-view'));
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(coverSection);
});
