import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type ToastState = {
    enable: boolean;
    message: string;
    status: 'OK' | 'Cancel';
}

const initialState: ToastState = {
    enable: false,
    message: '',
    status: 'OK'
}

const toastEnabler = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        trigger: (state, action: PayloadAction<ToastState>) => {
            state.enable = true;
            state.message = action.payload.message;
            state.status = action.payload.status;
        }
    }
})

export const { trigger } = toastEnabler.actions;

export const toastInfo = (state: RootState) => state.toast;

export default toastEnabler.reducer;