(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  function setTheme(t){ t==='dark'?root.setAttribute('data-theme','dark'):root.removeAttribute('data-theme'); localStorage.setItem('theme',t); }
  setTheme(localStorage.getItem('theme')||'light');
  btn.addEventListener('click',()=> setTheme(root.getAttribute('data-theme')==='dark'?'light':'dark'));
})();