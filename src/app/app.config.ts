import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';


// NG ZORRO
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { MenuOutline, UserOutline, UserAddOutline, UserDeleteOutline } from '@ant-design/icons-angular/icons';
import {provideAnimations} from '@angular/platform-browser/animations';

const icons: IconDefinition[] = [
  MenuOutline,
  UserOutline,
  UserAddOutline,
  UserDeleteOutline
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideNzIcons(icons),
    provideAnimations()
  ]
};
