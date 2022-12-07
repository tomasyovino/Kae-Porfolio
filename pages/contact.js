import Layout from "../components/Layout";
import ContactScreen from "../components/Screens/ContactScreen";

export default function ContactMe(props) {
  const { navbar, home } = props;
  
  return (
    <Layout navbar={navbar}>
      <ContactScreen />
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