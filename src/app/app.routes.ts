import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PrevService } from './pages/prev-service/prev-service';
import { TrainService } from './pages/train-service/train-service';
import { HealService } from './pages/heal-service/heal-service';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Solutions } from './pages/solutions/solutions';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'prevention', component: PrevService },
    { path: 'training', component: TrainService },
    { path: 'healing', component: HealService },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'solutions', component: Solutions }
];