import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit, OnDestroy {
  

  cargando: boolean;
  subscription: Subscription;

  constructor(public authService: AuthService,
              public store: Store<AppState>) { }

  ngOnInit() {

    this.subscription=this.store.select('ui').subscribe(
      ui => {
        this.cargando = ui.isLoading;
      }
    );

  }

  onSubmit( data: any): void {
    this.authService.crearUsuario(data.nombre, data.email, data.password);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
