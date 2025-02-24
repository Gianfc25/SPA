import getdata from '../utils/getdata';
const home = async() => {
    const characters = await getdata();
    const view = `
        <div class="characters">
           ${characters.results.map((character) => `
           <article class="character-item">
                <a href="#/${character.id}/">
                    <img src=${character.image} alt="${character.name}"/>
                    <h2>${character.name}</h2>
                </a>
            </article>
            `).join('')}   
        </div>
    `;
    return view;
}

export default home;