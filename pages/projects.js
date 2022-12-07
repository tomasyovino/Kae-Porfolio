import Layout from "../components/Layout";
import ProjectsScreen from "../components/Screens/ProjectsScreen";

export default function Works(props) {
  const { navbar, home } = props;
  
  return (
    <Layout navbar={navbar}>
      <ProjectsScreen />
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