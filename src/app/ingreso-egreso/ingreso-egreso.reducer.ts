import * as fromIngresEgreso from './ingreso-egreso.actions';
import { IngresoEgreso } from './ingreso-egreso.model';
import { AppState } from '../app.reducer';

export interface IngresoEgresoState {
    items: IngresoEgreso[];
}

export interface AppState extends AppState {
    ingresoEgreso: IngresoEgresoState;
}

const stateInit: IngresoEgresoState = {
    items: []
};


export function ingresoEgresoReducer( state = stateInit, action: fromIngresEgreso.acciones): IngresoEgresoState {

    switch ( action.type ) {
        case fromIngresEgreso.SET_ITEMS:
            return {
                items: [
                    ...action.items.map(
                        item => {
                            return {
                                ...item
                            };
                        }
                    )
                ]
            };

        case fromIngresEgreso.UNSET_ITEMS:
            return {
                items: []
            };
        default:
            return state;
    }
}
