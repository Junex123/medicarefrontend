import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { AdmindashComponent } from './admin/admindash/admindash.component';
import { UserdashComponent } from './user/userdash/userdash.component';
import { ContactusComponent } from './user/contactus/contactus.component';
import { AboutusComponent } from './user/aboutus/aboutus.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { PurchasereportComponent } from './admin/purchasereport/purchasereport.component';
import { ViewcontactComponent } from './admin/viewcontact/viewcontact.component';
import { CartComponent } from './user/cart/cart.component';
import { PaymentComponent } from './user/payment/payment.component';
import { OrderplacedComponent } from './user/orderplaced/orderplaced.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MyorderComponent } from './user/myorder/myorder.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoriesComponent } from './admin/categories/categories.component';
import { ProductsComponent } from './admin/products/products.component';
import { AdminnavbarComponent } from './navbar/adminnavbar/adminnavbar.component';
import { ViewproductComponent } from './user/viewproduct/viewproduct.component';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { AdminloginComponent } from './login/adminlogin/adminlogin.component';
import { UpdateproductComponent } from './admin/updateproduct/updateproduct.component';
import { OrderdetailsComponent } from './user/orderdetails/orderdetails.component';
import { AuthInterceptor, authInterceptorProviders } from './Services/auth.interceptor';
import { ShopComponent } from './user/shop/shop.component';
import { Location } from '@angular/common';
import { AllcategoryComponent } from './user/allcategory/allcategory.component';

import { SearchproductComponent } from './user/searchproduct/searchproduct.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    AdmindashComponent,
    UserdashComponent,
    ContactusComponent,
    AboutusComponent,
    AddproductComponent,
    AddcategoryComponent,
    UserlistComponent,
    PurchasereportComponent,
    ViewcontactComponent,
    CartComponent,
    PaymentComponent,
    OrderplacedComponent,
    WishlistComponent,
    ProfileComponent,
    MyorderComponent,
  
    CategoriesComponent,
    ProductsComponent,
    AdminnavbarComponent,
    ViewproductComponent,
    AdminloginComponent,
    UpdateproductComponent,
    OrderdetailsComponent,
    ShopComponent,
   
    AllcategoryComponent,
        
        SearchproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
   NgxPaginationModule,
    MatFormFieldModule,
    MatGridListModule,
    
   
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
