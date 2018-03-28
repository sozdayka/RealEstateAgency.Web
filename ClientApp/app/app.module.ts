import { NgModule, Inject } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { Ng2BootstrapModule } from 'ngx-bootstrap';

// i18n support
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { SignInComponent } from './containers/sign-in/sign-in.component';
import { RegistrationComponent } from './containers/registration/registration.component';

import { SignUpToViewComponent } from './containers/sign-up-to-view/sign-up-to-view.component';
import { MyProfileComponent } from './containers/my-profile/my-profile.component';
import { EditMyProfileComponent } from './containers/edit-my-profile/edit-my-profile.component';
import { ListOfRealEstateComponent } from './containers/list-of-real-estate/list-of-real-estate.component';


import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './containers/home/home.component';
import { UsersComponent } from './containers/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { CounterComponent } from './containers/counter/counter.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { FilterViewComponent } from './containers/filter-view/filter-view.component';

import { LinkService } from './shared/link.service';
import { UserService } from './shared/user.service';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';

export function createTranslateLoader(http: HttpClient, baseHref) {
    // Temporary Azure hack
    if (baseHref === null && typeof window !== 'undefined') {
        baseHref = window.location.origin;
    }
    // i18n files are in `wwwroot/assets/`
    return new TranslateHttpLoader(http, `${baseHref}/assets/i18n/`, '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        
        HeaderComponent,
        FooterComponent,

        SignInComponent,
        RegistrationComponent,

        SignUpToViewComponent,
        MyProfileComponent,
        EditMyProfileComponent,
        ListOfRealEstateComponent,

        NavMenuComponent,
        CounterComponent,
        UsersComponent,
        UserDetailComponent,
        HomeComponent,
        NotFoundComponent,
        FilterViewComponent
    ],
    imports: [
        CommonModule,
        BrowserModule.withServerTransition({
          appId: 'my-app-id' // make sure this matches with your Server NgModule
        }),
        HttpClientModule,
        TransferHttpCacheModule,
        BrowserTransferStateModule,


        FormsModule,
        Ng2BootstrapModule.forRoot(), // You could also split this up if you don't want the Entire Module imported

        // i18n support
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient, [ORIGIN_URL]]
            }
        }),

        // App Routing
        RouterModule.forRoot([
            {
                path: '',
                //redirectTo: 'home',
                //pathMatch: 'full'
                 component: HomeComponent
            },
            {
                path: 'home', component: HomeComponent,

                // *** SEO Magic ***
                // We're using "data" in our Routes to pass in our <title> <meta> <link> tag information
                // Note: This is only happening for ROOT level Routes, you'd have to add some additional logic if you wanted this for Child level routing
                // When you change Routes it will automatically append these to your document for you on the Server-side
                //  - check out app.component.ts to see how it's doing this
                data: {
                    title: 'Homepage',
                    meta: [{ name: 'description', content: 'This is an example Description Meta tag!' }],
                    links: [
                        { rel: 'canonical', href: 'http://blogs.example.com/blah/nice' },
                        { rel: 'alternate', hreflang: 'es', href: 'http://es.example.com/' }
                    ]
                }
            },
            {
                path: 'filter', component: FilterViewComponent,
                data: {
                    title: 'filter demo!!',
                    meta: [{ name: 'description', content: 'This is an Demo Bootstrap page Description!' }],
                    links: [
                        { rel: 'canonical', href: 'http://blogs.example.com/bootstrap/something' },
                        { rel: 'alternate', hreflang: 'es', href: 'http://es.example.com/bootstrap-demo' }
                    ]
                }
            },
            
            {
                path: 'my-profile', component: MyProfileComponent,
                data: {
                    title: 'sign-up-to-view',
                    meta: [{ name: 'description', content: 'sign-up-to-view' }],
                    links: [
                        { rel: 'canonical', href: 'http://blogs.example.com/counter/something' },
                        { rel: 'alternate', hreflang: 'es', href: 'http://es.example.com/counter' }
                    ]
                }
            },
            {
                path: 'edit-my-profile', component: EditMyProfileComponent,
                data: {
                    title: 'sign-up-to-view',
                    meta: [{ name: 'description', content: 'sign-up-to-view' }],
                    links: [
                        { rel: 'canonical', href: 'http://blogs.example.com/counter/something' },
                        { rel: 'alternate', hreflang: 'es', href: 'http://es.example.com/counter' }
                    ]
                }
            },
            {
                path: 'list-of-real-estate', component: ListOfRealEstateComponent,
                data: {
                    title: 'list-of-real-estate',
                    meta: [{ name: 'description', content: 'list-of-real-estate' }],
                    links: [
                        { rel: 'canonical', href: 'http://blogs.example.com/counter/something' },
                        { rel: 'alternate', hreflang: 'es', href: 'http://es.example.com/counter' }
                    ]
                }
            },
            {
                path: 'sign-up-to-view', component: SignUpToViewComponent,
                data: {
                    title: 'sign-up-to-view',
                    meta: [{ name: 'description', content: 'sign-up-to-view' }],
                    links: [
                        { rel: 'canonical', href: 'http://blogs.example.com/counter/something' },
                        { rel: 'alternate', hreflang: 'es', href: 'http://es.example.com/counter' }
                    ]
                }
            },
            {
                path: '**', component: NotFoundComponent,
                data: {
                    title: '404 - Not found',
                    meta: [{ name: 'description', content: '404 - Error' }],
                    links: [
                        { rel: 'canonical', href: 'http://blogs.example.com/bootstrap/something' },
                        { rel: 'alternate', hreflang: 'es', href: 'http://es.example.com/bootstrap-demo' }
                    ]
                }
            }
        ], {
          // Router options
          useHash: false,
          preloadingStrategy: PreloadAllModules,
          initialNavigation: 'enabled'
        })
    ],
    providers: [
        LinkService,
        UserService,
        TranslateModule
    ],
    bootstrap: [AppComponent]
})
export class AppModuleShared {
}
