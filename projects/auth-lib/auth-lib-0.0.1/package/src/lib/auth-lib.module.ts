import { NgModule } from '@angular/core';
import { AuthLibComponent } from './auth-lib.component';
import { JwtHelperService, JwtModule, JwtModuleOptions, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';
import { httpService } from './http.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';



@NgModule({
  declarations: [
    AuthLibComponent
  ],
  imports: [HttpClientModule,  JwtModule

  ],
  exports: [
    AuthLibComponent
  ],
  providers: [httpService, AuthService, {
    //ba config in method dar appModule ke anjam beshe,  har darkhasti ke bekhad be samt server bere in migire- token ro to heder esh qarar mide
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi:true
  }, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService],
})
export class AuthLibModule { }
