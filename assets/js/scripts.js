var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}
if (!window.location.protocol.match(/https/) && window.location.hostname.match(/kathleen/)) {
    window.location = window.location.replace(/^http:/, 'https:');
}
