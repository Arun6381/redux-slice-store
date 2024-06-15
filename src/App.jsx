import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import store from "./store copy.jsx";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <Provider store={store}>
      <div>
        <h1>🏦 The React-Redux Bank ⚛️</h1>
        {fullName === "" ? (
          <CreateCustomer />
        ) : (
          <>
            <Customer />
            <AccountOperations />
            <BalanceDisplay />
          </>
        )}
      </div>
    </Provider>
  );
}

export default App;
