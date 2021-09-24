// app storage
import { observable, action, computed, makeObservable } from 'mobx'

export class AppStore {
    constructor() {

        makeObservable(this, {
            colorScheme: observable,
            init: action,
            setColorScheme: action,
        })
    }

    // color schema
    colorScheme = "teal"

    init() {
        // get target from cookie
        // load config and data from localstorage
    }

    setColorScheme(c) {
        // TODO: store
        this.colorScheme = c
    }
}

export default new AppStore()