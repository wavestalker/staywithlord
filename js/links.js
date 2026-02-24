const LINKS = [
    {
        label: 'Patreon',
        href: 'https://patreon.com/StayWithLord',
    },
    {
        label: 'YouTube Channel',
        href: 'https://www.youtube.com/@StayWithLord',
    },
    {
        label: 'YouTube Music',
        href: 'https://music.youtube.com/@StayWithLord',
    },
    {
        label: 'Spotify Podcast',
        href: 'https://open.spotify.com/show/5VnMLuMMlWRP4xKvE1AcYq',
    },
    {
        label: 'Apple Podcast',
        href: 'https://podcasts.apple.com/podcast/yourpodcast',
    },
    {
        label: 'Amazon Podcast',
        href: 'https://music.amazon.com/podcasts/yourpodcast',
    },
    {
        label: 'iHeart Podcast',
        href: 'https://www.iheart.com',
    },
    {
        label: 'Castbox Podcast',
        href: 'https://castbox.fm',
    },
    {
        label: 'Goodpods Podcast',
        href: 'https://goodpods.com',
    },
    {
        label: 'Pocket Casts Podcast',
        href: 'https://pca.st',
    },
];

function buildLink(link, index) {
    var el = document.createElement('a');
    el.className = 'link-card';
    el.href = link.href;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
    el.style.animationDelay = (0.18 + index * 0.07) + 's';
    el.innerHTML = '<span class="link-label">' + link.label + '</span>';
    return el;
}

function renderLinks(container) {
    var frag = document.createDocumentFragment();
    LINKS.forEach(function (link, i) { frag.appendChild(buildLink(link, i)); });
    container.appendChild(frag);
}
