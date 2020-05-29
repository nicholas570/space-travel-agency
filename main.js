const logo = document.getElementById('logo');
const destinations = document.getElementById('logoDestinations');
const circuits = document.getElementById('logoCircuits');
const stations = document.getElementById('logoStations');
const reservations = document.getElementById('logoContact');

const delay = () => {
  setTimeout(() => {
    logo.style.display = 'block';
  }, 400);
  setTimeout(() => {
    destinations.style.display = 'block';
  }, 700);
  setTimeout(() => {
    circuits.style.display = 'block';
  }, 1000);
  setTimeout(() => {
    stations.style.display = 'block';
  }, 1300);
  setTimeout(() => {
    reservations.style.display = 'block';
  }, 1600);
};

logo.onload = delay();
destinations.onload = delay();
circuits.onload = delay();
reservations.onload = delay();
stations.onload = delay();
