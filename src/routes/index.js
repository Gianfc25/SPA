import Header from '../templates/Header';
import home from '../pages/home';
import character from '../pages/character';
import error from '../pages/error404';
import gethash from '../utils/gethash';
import resolveroutes from '../utils/resolveroutes';

const routes = {
    '/': home,
    '/:id':character,
    '/contact': 'contact',
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = gethash();
    let route = await resolveroutes(hash);
    let render = routes [route] ? routes [route] : error;
    content.innerHTML = await render();

    
};

export default router;