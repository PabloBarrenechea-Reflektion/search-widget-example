
import './App.css'
import { WidgetsProvider } from "@sitecore-search/react";
import {createTheme} from "@sitecore-search/ui";
import SearchResultsWithInput from "./widgets/SearchResultsWithInput";
function App() {
    const SEARCH_CONFIG = {
        env: import.meta.env.VITE_SEARCH_ENV,
        customerKey: import.meta.env.VITE_SEARCH_CUSTOMER_KEY,
        apiKey: import.meta.env.VITE_SEARCH_API_KEY,
    };
    const { style } = createTheme({});
  return (
    <>
      <div style={style}>
          <WidgetsProvider
              env={SEARCH_CONFIG.env}
              customerKey={SEARCH_CONFIG.customerKey}
              apiKey={SEARCH_CONFIG.apiKey}
              publicSuffix={true}
          >
              <SearchResultsWithInput rfkId={"jobs_results"} />
          </WidgetsProvider>
      </div>
    </>
  )
}

export default App
