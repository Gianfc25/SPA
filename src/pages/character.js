import gethash from '../utils/gethash';
import getdata from '../utils/getdata';

const character = async() => {
    const id = gethash();
    const character = await getdata(id);
    const view = `
    <div class="characters-inner">
    <article class="characters-card">
    <img src="${character.image}" alt="${character.name}">
    <h2>${character.name}</h2>
    </artcile>
    <artcile class="characters-card">
    <h3>episodes: <span>${character.episode.length}</span></h3>
    <h3>status: <span>${character.status}</span></h3>
    <h3>species: <span>${character.species}</span></h3>
    <h3>gender: <span>${character.gender}</span></h3>
    <h3>origin: <span>${character.origin.name}</span></h3>
    <h3>ladt location: <span>${character.location.name}</span></h3>
    </artcile>
    </div>
    `;
    return view;
};
export default character;