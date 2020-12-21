import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { FilmsComponent } from '@components//films/films.component';
import { MenuComponent } from '@components//menu/menu.component';
import { FooterComponent } from '@components//footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from '@components//user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Directiva1Directive } from './directives/directiva1.directive';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from '@components/forms/forms.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './components/index/index.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationPipe } from './pipes/pagination.pipe';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ArticlesComponent } from './components/articles/articles.component';
import { MatCardModule } from '@angular/material/card';
import { ArticleComponent } from '@components/article/article.component';
const rutas: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'film',
    component: FilmsComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  {
    path: 'pagination',
    component: PaginationComponent
  },
  {
    path: 'inheritance',
    component: ArticlesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    MenuComponent,
    FooterComponent,
    UserComponent,
    FormsComponent,
    Directiva1Directive,
    DirectivesComponent,
    IndexComponent,
    PaginationComponent,
    PaginationPipe,
    ArticleComponent,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }





