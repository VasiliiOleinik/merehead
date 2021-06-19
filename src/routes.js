import Loadable from 'react-loadable';
import Loading from 'src/components/Loading';

const Dashboard = Loadable({
  loader: () => import('./pages/Dashboard'), loading: Loading
});
const UserCreate = Loadable({
  loader: () => import('./pages/UserCreate'), loading: Loading
});
const EditUser = Loadable({
  loader: () => import('./pages/EditUser'), loading: Loading
});


const routes = [
  { path: '/', name: 'Главная страница', component: Dashboard, exact: true },
  { path: '/user-create', name: 'Создание пользователя', component: UserCreate, exact: true },
  { path: '/user-edit/:id', name: 'Редактирование пользователя', component: EditUser }
];

export default routes;