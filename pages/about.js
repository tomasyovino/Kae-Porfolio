import Layout from "../components/Layout";
import AboutScreen from "../components/Screens/AboutScreen";

export default function AboutMe(props) {
  const { navbar, home } = props;

  return (
    <Layout navbar={navbar}>
      <AboutScreen />
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