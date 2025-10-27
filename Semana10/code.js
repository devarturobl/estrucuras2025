const API_URL = "https://rickandmortyapi.com/api/character?page=1";

async function getCharacters(){
    try{
        const res = await fetch(API_URL);
        if(!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        return data.results || [];
    }catch(err){
        console.error('Error fetching characters:', err);
        return [];
    }
}

function createCard(person){
    const div = document.createElement('article');
    div.className = 'card';

    const img = document.createElement('img');
    img.className = 'thumb';
    img.src = person.image;
    img.alt = person.name;

    const title = document.createElement('h3');
    title.textContent = person.name;

    const status = document.createElement('div');
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = person.status || 'Unknown';
    status.appendChild(badge);

    const info = document.createElement('p');
    info.className = 'muted';
    info.textContent = `${person.species}${person.type ? ' • ' + person.type : ''} • ${person.gender}`;

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(status);
    div.appendChild(info);

    return div;
}

async function render(){
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    const loading = document.createElement('div');
    loading.className = 'muted';
    loading.textContent = 'Cargando personajes...';
    grid.appendChild(loading);

    const chars = await getCharacters();
    grid.innerHTML = '';
    if(chars.length === 0){
        const empty = document.createElement('div');
        empty.className = 'muted';
        empty.textContent = 'No se encontraron personajes.';
        grid.appendChild(empty);
        return;
    }

    chars.forEach(p => {
        const card = createCard(p);
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const refreshBtn = document.getElementById('refreshBtn');
    if(refreshBtn) refreshBtn.addEventListener('click', () => render());
    render();
});