function createRipple(e, el) {
    var rect = el.getBoundingClientRect();
    var x = (e.clientX || rect.left + rect.width / 2) - rect.left;
    var y = (e.clientY || rect.top + rect.height / 2) - rect.top;
    var ripple = document.createElement('span');
    ripple.className = 'link-ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    el.appendChild(ripple);
    ripple.addEventListener('animationend', function () { ripple.remove(); }, { once: true });
}

function initUI() {
    document.addEventListener('click', function (e) {
        var card = e.target.closest('.link-card');
        if (card) createRipple(e, card);
    });
}
