import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { AppearDirective } from './header.directive';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AppearDirective,
    HeaderComponent,
    AboutComponent,
    PortfolioComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollCoreModule.forRoot({ duration: 1600 }),
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
