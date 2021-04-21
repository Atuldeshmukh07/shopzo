const prevIcon = '<img width="25" src="./assets/left.svg" alt="left">';
const nextIcon = '<img width="25" src="./assets/right.svg" alt="rigth">';

$(".owl-carousel").owlCarousel({
  center: true,
  loop: true,
  margin: 20,
  nav: true,
  navText: [prevIcon, nextIcon],
  nav: "nextIcon",
  nav: "prevIcon",
  dots: false,
  stagePadding: 100,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

