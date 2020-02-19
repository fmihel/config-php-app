import { ut } from 'fmihel-browser-lib';
import router from 'fmihel-php-router-client';
import store from 'REDUX/store';
import logout from './pages/Autorize/actions/Logout';

// в каждый ajax запрос присоединяем информацию об авторизации
router().on('before', (e) => {
    if (e.id !== 'autorize') {
        const state = store.getState();
        e.autorize = state.autorize;
    }
    console.info('before');
});


// пришедшая информация проевряется на предмет авторизована ли она, если нет то logout
router().on('after', (from) => {
    console.info('after');
    // eslint-disable-next-line eqeqeq
    if ((from.res == 0) && (ut.get(from, 'data', 'autorize', 'enable', true) === false)) {
        logout();
    }
});
