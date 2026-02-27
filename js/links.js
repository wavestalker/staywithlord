const LINKS = [
    {
        label: 'Patreon',
        href: 'https://patreon.com/StayWithLord',
    },
    {
        label: 'YouTube',
        href: 'https://youtube.com/@StayWithLord',
    },
    {
        label: 'YouTube Music',
        href: 'https://music.youtube.com/@StayWithLord',
    },
    {
        label: 'Spotify',
        href: 'https://open.spotify.com/show/5VnMLuMMlWRP4xKvE1AcYq',
    },
    {
        label: 'Apple',
        href: 'https://podcasts.apple.com/podcast/id1879875401',
    },
    {
        label: 'Amazon',
        href: 'https://music.amazon.com/podcasts/8447fe1a-58ab-4a8f-aa63-199a944ab031',
    },
    {
        label: 'iHeart',
        href: 'https://iheart.com/podcast/324793916',
    },
    {
        label: 'Castbox',
        href: 'https://castbox.fm/channel/id7095877',
    },
    {
        label: 'Overcast',
        href: 'https://overcast.fm/itunes1879875401',
    },
    {
        label: 'Player FM',
        href: 'https://player.fm/series/3719505',
    },
    {
        label: 'Pocket Casts',
        href: 'https://pca.st/ay81nlg4',
    },
    {
        label: 'Podcast Index',
        href: 'https://podcastindex.org/podcast/7720864',
    },
    {
        label: 'Podcast Addict',
        href: 'https://podcastaddict.com/podcast/6809073',
    },
    {
        label: 'Pandora',
        href: 'https://pandora.com/podcast/morning-prayers/PC:1001114353',
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
