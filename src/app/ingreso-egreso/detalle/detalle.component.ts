import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { IngresoEgreso } from '../ingreso-egreso.model';
import { Subscription } from 'rxjs';
import { IngresoEgresoService } from '../ingreso-egreso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit, OnDestroy {
 

  items: IngresoEgreso[];
  subscripcion: Subscription = new Subscription();

  constructor( private store: Store<AppState>,
               private ingresoEgresoService: IngresoEgresoService ) { }

  ngOnInit() {
    this.subscripcion = this.store.select('ingresoEgreso')
    .subscribe( ingresosEgresos => {
      this.items = ingresosEgresos.items;
    });
  }

  borrarItem( item: IngresoEgreso ) {
    this.ingresoEgresoService.borrarIngresoEgreso( item.uid )
    .then (() => {
      Swal.fire({
        title: 'Ingresos/egresos',
        text: item.descripcion + ' eliminado',
        icon: 'info'
      });
    });
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

}
