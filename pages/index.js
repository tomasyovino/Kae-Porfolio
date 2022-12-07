import Layout from "../components/Layout";
import HomeScreen from "../components/Screens/HomeScreen";

export default function Home(props) {
  const { navbar, home } = props;
  
  return (
    <Layout navbar={navbar} >
      <HomeScreen home={home} />
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const response = await import (`../lang/${locale}.json`);

  return {
    props: {
      navbar: response.default.navbar,
      home: response.default.home,
    }
  };
};