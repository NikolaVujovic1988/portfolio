import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { FrontPageFooterComponent } from './front-page-footer/front-page-footer.component';
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { MyPortfolioComponent } from "./my-portfolio/my-portfolio.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FrontPageComponent,
        FrontPageFooterComponent,
        ContactComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AboutMeComponent,
        HttpClientModule,
        SkillsComponent,
        MyPortfolioComponent,
        ProjectsComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
