import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context";
import Page from "./Page";
import AppRoutes from "./routes";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Page>
          <AppRoutes />
        </Page>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
