import { BrowserRouter } from "react-router-dom";
import Page from "./Page";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Page>
        <AppRoutes />
      </Page>
    </BrowserRouter>
  );
}

export default App;
