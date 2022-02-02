/** @jsxImportSource @emotion/react */
import GlobalStyles from "./components/GlobalStyles";
import PageLayout from "./components/PageLayout";
import Providers from "./providers";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Providers>
        <PageLayout>
          <div css={{ fontSize: 36, color: "#363945" }}>Parcel React App</div>
        </PageLayout>
      </Providers>
    </Fragment>
  );
};

export default App;
