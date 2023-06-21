import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type ToastState = {
    enable: boolean;
    message: string;
    status: 'OK' | 'Cancel';
    time: number;
}

const initialState: ToastState = {
    enable: false,
    message: '',
    status: 'OK',
    time: 0,
}

const toastEnabler = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        sendToast: (state, action: PayloadAction<ToastState>) => {
            state.enable = true;
            state.message = action.payload.message;
            state.status = action.payload.status;
            state.time = action.payload.time;
        }
    }
})

export const { sendToast } = toastEnabler.actions;

export const toastInfo = (state: RootState) => state.toast;

export default toastEnabler.reducer;