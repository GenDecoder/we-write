import {
    BehaviorSubject
} from 'rxjs/BehaviorSubject'
import {
    fromEvent
} from 'rxjs/observable/fromEvent'
// Operators
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'

export const resizeObservable = fromEvent(window, 'resize')
    .debounceTime(300);
export const searchInputObservable = el => fromEvent(el, 'input')
    .map(value => me.inputEl.value)
    .debounceTime(300)
    .distinctUntilChanged();

export const dialogObservable = new BehaviorSubject({});
export const sidenavObservable = new BehaviorSubject(false);