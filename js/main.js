document.addEventListener('DOMContentLoaded', function () {
    var list = document.getElementById('links-list');
    if (!list) return;
    renderLinks(list);
    initUI();
});
