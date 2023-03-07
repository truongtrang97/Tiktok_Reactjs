import Home from './src/pages/Home/Home';
import Following from './src/pages/Following';
import Upload from './src/pages/Upload';
import Search from './src/pages/Search';
import config from './src/';
import Live from './src/pages/Live/Live';
import Profile from './src/pages/Profile';
import { Layoutfull } from './src/layout';

const publicRoutes = [
    { path: config.routes.profile, component: Profile, layout: Layoutfull },
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live, layout: Layoutfull },
    { path: config.routes.upload, component: Upload, layout: null },
    { path: config.routes.search, component: Search },
];
const privalRoutes = [];
export { publicRoutes, privalRoutes };
