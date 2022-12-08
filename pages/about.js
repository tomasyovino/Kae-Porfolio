import Layout from "../components/Layout";
import AboutScreen from "../components/Screens/AboutScreen";

export default function AboutMe(props) {
  const { navbar, about } = props;

  return (
    <Layout navbar={navbar}>
      <AboutScreen about={about} />
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const response = await import (`../lang/${locale}.json`);

  return {
    props: {
      navbar: response.default.navbar,
      about: response.default.about,
    }
  };
};