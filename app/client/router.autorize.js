import { ut } from 'fmihel-browser-lib';
import router from 'fmihel-php-router-client';
import store from 'REDUX/store';
import logout from 'REDUX/logout/action';

// в каждый ajax запрос присоединяем информацию об авторизации
router().on('before', (e) => {
    if (e.id !== 'autorize') {
        const state = store.getState();
        e.data.autorize = state.autorize;
    }
});

// пришедшая информация проевряется на предмет авторизована ли она, если нет то logout
router().on('after', (from) => {
    // eslint-disable-next-line eqeqeq
    if ((from.res == 0) && (ut.get(from, 'data', 'autorize', 'enable', true) === false)) {
        logout();
    }
});
