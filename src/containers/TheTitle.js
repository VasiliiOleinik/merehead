import React from 'react';

import routes from 'src/routes';
import history from 'src/utils/history';
const TheTitle = () => {

    const mySplits = history.location.pathname.split(/[\\/]/); // Разбиваем адресную строку по слешам
    const pageIsView = history.location.pathname.indexOf('/user-edit/') !== -1; // Если в пути есть /view/ - значит это страница просмотра
    const pageId = mySplits[mySplits.length - 1]; // Берем последний элемент массива - это ID
    const newPath = history.location.pathname.replace(pageId, ':id'); // Берем текущий URL и заменяем в нем наш айди на :id
    const title = routes.filter(route => !pageIsView ? route.path === history.location.pathname : route.path === newPath);

    return (
        <>
            <h1 className="mb-4">{`${title.length !== 0 ? title[0].name : ''} ${pageIsView ? pageId : ''}`}</h1>
        </>
    )
}
export default TheTitle