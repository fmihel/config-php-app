import { ut } from 'fmihel-browser-lib';
import router from 'fmihel-php-router-client';
import redux from 'REDUX';

// в каждый ajax запрос присоединяем информацию об авторизации
router().on('before', (e) => {
    if (e.id !== 'autorize') {
        const state = redux.getState();
        e.autorize = state.autorize;
    }
});


// пришедшая информация проевряется на предмет авторизована ли она, если нет то logout
router().on('after', (from) => {
    // eslint-disable-next-line eqeqeq
    if ((from.res == 0) && (ut.get(from, 'data', 'autorize', 'enable', true) === false)) {
        redux.actions.Logout();
    }
});
