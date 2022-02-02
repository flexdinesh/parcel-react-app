/** @jsxImportSource @emotion/react */
import Layout from './components/Layout';
import * as styles from './App.styles';

const App = () => {
  return (
    <Layout>
      <div css={styles.app}>
        <main css={styles.main}>Parcel React App</main>
      </div>
    </Layout>
  );
};

export default App;
