import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import contactsReducer from "./contactsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactPersistConfig = {
  key: "saved-contactList",
  storage,
  whitelist: ["items"],
};

const contactPersistedReducer = persistReducer(
  contactPersistConfig,
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactPersistedReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
