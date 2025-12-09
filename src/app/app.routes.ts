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
    { path: 'treinamento', component: PrevService },
    { path: 'primeiros-socorros', component: TrainService },
    { path: 'saude', component: HealService },
    { path: 'sobre', component: About },
    { path: 'contato', component: Contact },
    { path: 'catalogo', component: Solutions },
    { path: 'catalogo/:section', component: Solutions }
];