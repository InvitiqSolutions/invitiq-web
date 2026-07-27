import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'service',
        component: ServiceComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'service/:slug',
        component: ServiceDetailComponent,
      },
      // MUST ALWAYS BE LAST
      {
          path: '**',
          component: NotFoundComponent
      }
    
];
