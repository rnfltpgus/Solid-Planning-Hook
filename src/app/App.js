import GlobalStyles from "./GlobalStyles";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Header from "../components/Header";
import UserList from "../components/UserList";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Banner />
      <Layout>
        <Header />
        <UserList />
      </Layout>
    </>
  );
};

export default App;
