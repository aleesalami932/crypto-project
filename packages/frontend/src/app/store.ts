import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { dataSlice, keySlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [keySlice.reducerPath]: keySlice.reducer,
    [dataSlice.reducerPath]: dataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(keySlice.middleware)
      .concat(dataSlice.middleware),
  devTools: true,
});
setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
