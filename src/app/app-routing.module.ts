import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdashComponent } from './user/userdash/userdash.component';
import { AdmindashComponent } from './admin/admindash/admindash.component';
import { LoginComponent } from './login/login/login.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { PurchasereportComponent } from './admin/purchasereport/purchasereport.component';
import { ContactusComponent } from './user/contactus/contactus.component';
import { ViewcontactComponent } from './admin/viewcontact/viewcontact.component';
import { CartComponent } from './user/cart/cart.component';
import { OrderplacedComponent } from './user/orderplaced/orderplaced.component';
import { PaymentComponent } from './user/payment/payment.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
import { MyorderComponent } from './user/myorder/myorder.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AboutusComponent } from './user/aboutus/aboutus.component';

import { SignupComponent } from './signup/signup.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { ProductsComponent } from './admin/products/products.component';
import { ViewproductComponent } from './user/viewproduct/viewproduct.component';
import { ShopComponent } from './user/shop/shop.component';
import { AdminloginComponent } from './login/adminlogin/adminlogin.component';
import { AdminGuard } from './Services/admin.guard';
import { UserGuard } from './Services/user.guard';

import { AllcategoryComponent } from './user/allcategory/allcategory.component';
import { OrderdetailsComponent } from './user/orderdetails/orderdetails.component';
import { UpdateproductComponent } from './admin/updateproduct/updateproduct.component';
import { SearchproductComponent } from './user/searchproduct/searchproduct.component';





const routes: Routes = [
{path:'home' ,component:UserdashComponent, pathMatch: 'full', title: 'Home' },
{path:'adminhome' ,component:AdmindashComponent ,canActivate: [AdminGuard], pathMatch: 'full', title: 'Admin Dashboard' },
{path:'login' ,component:LoginComponent, pathMatch: 'full', title: 'User Login'},
{path:'addproduct' , component:AddproductComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'Add Medicine'},
{path:'addcategory' , component:AddcategoryComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'Add Category'},
{path:'userlist' , component:UserlistComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'Userlist'},
{path:'purchasereport' , component:PurchasereportComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'Purchasereport'},
{path:'viewcontact' , component:ViewcontactComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'View Contact'},
{path:'cart' , component:CartComponent, pathMatch: 'full', title: 'Cart Details'},
{path:'orderplaced' , component:OrderplacedComponent, canActivate: [UserGuard], pathMatch: 'full', title: 'Orderplaced'},
{path:'payment' , component:PaymentComponent, canActivate: [UserGuard], pathMatch: 'full', title: 'Payment'},
{path:'wishlist' , component:WishlistComponent, pathMatch: 'full', title: 'Wishlist'},
{path:'myorder/:username' , component:MyorderComponent, canActivate: [UserGuard], pathMatch: 'full', title: 'Myorder'},
{path:'profile' , component:ProfileComponent, canActivate: [UserGuard], pathMatch: 'full', title: 'Profile'},
{path:'aboutus' ,component:AboutusComponent, pathMatch: 'full', title: 'Aboutus'},
{path:'contactus' , component:ContactusComponent, pathMatch: 'full', title: 'Contactus'},

{path:'', component:UserdashComponent, pathMatch: 'full', title: 'Home'},
{path:'register',component:SignupComponent, pathMatch: 'full', title: 'User Registration'},
{path:'categories',component:CategoriesComponent, pathMatch: 'full', title: 'CategoriesView Contact'},
{path:'products',component:ProductsComponent, pathMatch: 'full', title: 'Products'},
{path:'viewproduct/:name',component:ViewproductComponent, pathMatch: 'full', title: 'View Product'},
{path:'shop',component:ShopComponent, pathMatch: 'full', title: 'Shop'},
{path:'adminlogin',component:AdminloginComponent,pathMatch: 'full', title: 'Admin Login'},
{path: 'orderdetail/:oid', component: OrderdetailsComponent, canActivate: [UserGuard], pathMatch: 'full', title: 'Order Confirmation' },
{path: 'orderdetails/:oid', component: OrderdetailsComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'Order Confirmation' },
{path:'allcategory',component:AllcategoryComponent,pathMatch:'full',title:'All Category'},
{path:'allcategory/:category',component:AllcategoryComponent,pathMatch:'full',title:'Selected Category'},
{path:'updateproduct/:pid',component:UpdateproductComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'Update Product' },
{path:'searchproduct/:name',component:SearchproductComponent,pathMatch:'full', title:'Search Product'},
{path:'orderplaced/:oid',component:OrderplacedComponent,canActivate:[UserGuard],pathMatch:'full', title:'Order Placed'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
