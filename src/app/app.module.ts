import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import {CustomFormsModule} from 'ng2-validation';
//import { AdminAuthGuardService } from './admin-auth-guard.service';
//import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireListObservable,FirebaseObjectObservable,AngularFireDatabase} from 'angularfire2/database';
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    FormsModule,
    CustomFormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
   

    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path:'',
      component: HomeComponent
    },
    
      { path:'products',
      component:ProductsComponent
    },
      { path:'shopping-cart',
      component: ShoppingCartComponent
    },
    { path:'login',
      component: LoginComponent
    },
    //abnormal user routes
      { path:'check-out',
      component: CheckOutComponent,canActivate:[AuthGuard]
    },
      { path:'order-success',
      component: OrderSuccessComponent,canActivate:[AuthGuard]
    },
      { path:'my/orders',
      component:MyOrdersComponent,canActivate:[AuthGuard]
    },
    
    //admin routes
    { path:'admin/products',
      component: AdminProductsComponent,canActivate:[AuthGuard]
    },

    { path:'admin/products/new',
    component: ProductFormComponent,canActivate:[AuthGuard]
  },

    
    { path:'admin/orders',
      component:AdminOrdersComponent,canActivate:[AuthGuard]
    }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    //AdminAuthGuardService,
    UserService,  
    
  
    CategoryService,
    ProductService
    //AdminAuthGuard
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
