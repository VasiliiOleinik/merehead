import Loadable from 'react-loadable';
import Loading from 'src/components/Loading';

const Dashboard = Loadable({
  loader: () => import('./pages/Dashboard'), loading: Loading
});;

const routes = [
  { path: '/', name: 'Главная страница', component: Dashboard, exact: true },
];

export default routes;