import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthPageComponent } from '@bookapp/angular/desktop/auth';
import { MainLayoutComponent } from '@bookapp/angular/desktop/main-layout';
import { AuthGuard } from '@bookapp/angular/shared';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'auth',
          component: AuthPageComponent
        },
        {
          path: '',
          component: MainLayoutComponent,
          canActivate: [AuthGuard],
          children: [
            {
              path: 'password',
              loadChildren: () =>
                import('@bookapp/angular/desktop/password').then(
                  m => m.PasswordModule
                ),
              canLoad: [AuthGuard]
            }
          ]
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
