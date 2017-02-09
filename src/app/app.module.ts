import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CardTitleComponent } from 'app/Widgets/Card/cardTitle.component';
import {CardContentComponent} from 'app/Widgets/Card/cardContent.component';
import { CardComponent, SearchFilterPipe } from 'app/Widgets/Card/card.component';
import {UserManagementComponent} from 'app/Users/userManagement.component';
import {UserManagementService} from 'app/Users/userManagement.service';

import {CardPictureComponent} from 'app/Widgets/Picture/cardPicture.component';
import {PictureService} from 'app/Widgets/Picture/picture.service';

import {TabsComponent} from 'app/Widgets/TabSelect/tabs.component';

import {MainPageComponent} from 'app/MainPage/mainpage.component';

import {MappingComponent} from 'app/Mapping/mapping.component';
import {MappingService} from 'app/Mapping/mapping.service';

import {ConfigComponent} from 'app/Widgets/Config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTitleComponent,
    CardContentComponent,
    CardComponent,
    UserManagementComponent,
    CardPictureComponent,
    TabsComponent,
    MainPageComponent,
    MappingComponent,
    ConfigComponent,
    SearchFilterPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserManagementService,
    PictureService,
    MappingService,
    SearchFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
