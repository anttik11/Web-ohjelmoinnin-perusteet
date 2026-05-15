function alustaTema() {
  var tallennettu = localStorage.getItem('teema');

  if (tallennettu === 'dark') {
    document.body.classList.add('dark-mode');
    paivitaNappi(true);
  } else {
    document.body.classList.remove('dark-mode');
    paivitaNappi(false);
  }
}

function vaihdaTema() {
  var onDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('teema', onDark ? 'dark' : 'light');
  paivitaNappi(onDark);
}

function paivitaNappi(onDark) {
  var nappi = document.getElementById('tema-nappi');
  if (!nappi) return;

  var ikoniElem = nappi.querySelector('.btn-icon');
  if (ikoniElem) ikoniElem.textContent = onDark ? '☀️' : '🌙';
  nappi.lastChild.textContent = onDark ? ' Light mode' : ' Dark mode';
}
