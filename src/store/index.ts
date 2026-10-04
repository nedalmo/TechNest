import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import sliceWishlist from "./wishlist/SliceWishlist"
import { persistStore } from "redux-persist";
import sliceCategorys from "./categorys/Slicecategorys";
import sliceProduct from "./products/SliceProducts";
import cartSlice from "./cart/sliceCart";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import  authSlice from "./auth/thunkAuth/authSlice";
import sliceGetCategoryProduct from "./categoryeProduct/sliceGetCategoryProduct"
import sliceOrder from "./orders/sliceorder"
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import sliceDetailsProduct from "./getDetailsProduct/sliceDetailsProduct"
import sliceLanguage from "./language/sliceLanguage"
import sliceLocations  from "./loactions/sliceLocations"
import sliceLikeProduct from "./likeProduct/sliceLikeProduct"
const rootPrisisteConfig  = {
    key: "root",
     whitelist: ["items","authSlice"],
    storage:storage.default ,
}

const loactionStorage  = {
    key: "locations",
     whitelist: ["locations"],
    storage:storage.default ,
}

const authPrisistConfig = {
  key:"auth",
  whitelist:["user","accessToken"],
    storage:storage.default ,
}

const perseistConfigCart = {
  key: "cart",
  whitelist: ["items"],
  storage:storage.default,
};
const perseistConfigsLanguage = {
  key: "Language",
  whitelist: ["language"],
  storage:storage.default,
};


const rootReducer = combineReducers({

  authSlice:persistReducer(authPrisistConfig,authSlice),
  sliceCategorys,
  sliceGetCategoryProduct,
  sliceProduct,
  sliceLikeProduct,
sliceOrder ,
sliceDetailsProduct,
sliceLanguage:persistReducer(perseistConfigsLanguage, sliceLanguage),

sliceLocations:persistReducer(loactionStorage, sliceLocations),
  cartSlice: persistReducer(perseistConfigCart, cartSlice),
  sliceWishlist,
});


const reducerPrisrt =  persistReducer(rootPrisisteConfig,rootReducer)

const store = configureStore({
  reducer: reducerPrisrt, 
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor  = persistStore(store);

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export  {store,persistor};