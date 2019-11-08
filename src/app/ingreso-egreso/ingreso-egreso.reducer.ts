import * as fromIngresEgreso from './ingreso-egreso.actions';
import { IngresoEgreso } from './ingreso-egreso.model';

export interface IngresoEgresoState {
    items: IngresoEgreso[];
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
