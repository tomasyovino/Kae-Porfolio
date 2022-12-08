import Layout from "../components/Layout";
import ContactScreen from "../components/Screens/ContactScreen";

export default function ContactMe(props) {
  const { navbar, contact } = props;
  
  return (
    <Layout navbar={navbar}>
      <ContactScreen contact={contact} />
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const response = await import (`../lang/${locale}.json`);

  return {
    props: {
      navbar: response.default.navbar,
      contact: response.default.contact,
    }
  };
};