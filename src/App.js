import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context";
import Page from "./Page";
import AppRoutes from "./routes";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Page>
          <AppRoutes />
        </Page>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
