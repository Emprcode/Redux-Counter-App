import {configureStore} from '@reduxjs/toolkit'
import reducer from './redux/CounterSlice'

export const Store = configureStore({
    reducer:{
        counter: reducer
    }
})