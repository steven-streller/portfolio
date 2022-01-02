// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

document.getElementById("birth").innerHTML = (() => {
  let ageDifMs = Date.now() - new Date("1997-07-23");
  let ageDate = new Date(ageDifMs);
  return "23.07.1997 (" + Math.abs(ageDate.getUTCFullYear() - 1970) + ")";
}).call(this);

document.getElementById("copyright").innerHTML = (() => {
  return "&copy; " + new Date().getFullYear() + " Alle Rechte vorbehalten.";
}).call(this);