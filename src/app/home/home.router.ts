import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
{
path: 'home',
component: HomePage,
children: [
{
path: 'feed',
loadChildren: () =>
import('../pages/feed/feed.module').then(m => m.FeedPageModule)
},
{
path: 'messages',
loadChildren: () =>
import('../pages/messages/messages.module').then(
m => m.MessagesPageModule
)
},
{
path: 'notifications',
loadChildren: () =>
import('../pages/notifications/notifications.module').then(
m => m.NotificationsPageModule
)
},
{
path: 'settings',
loadChildren: () =>
import('../pages/settings/settings.module').then(
m => m.SettingsPageModule
)
},
 {
    path: 'reports',
    loadChildren: () => import('../pages/reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'user-reports',
    loadChildren: () => import('../pages/user-reports/user-reports.module').then( m => m.UserReportsPageModule)
  }

]
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class HomeRouter {}