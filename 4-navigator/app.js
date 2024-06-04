const addressLat = 25;
const positionLat = 10;
const addressLong = 50;
const positionLong = 20;

console.log(
  Math.sqrt(
    (addressLat - positionLat) * (addressLat - positionLat) +
      (addressLong - positionLong) * (addressLong - positionLong)
  )
);
