import { configureStore } from "@reduxjs/toolkit";
// Other imports

import accountreducer from "./features/accounts/accountSlice";
import customereducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountreducer,
    customer: customereducer,
  },
});

export default store;
