import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { FrontPageFooterComponent } from './front-page-footer/front-page-footer.component';
import { AboutMeComponent } from "./about-me/about-me.component";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FrontPageComponent,
        FrontPageFooterComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AboutMeComponent
    ]
})
export class AppModule { }
