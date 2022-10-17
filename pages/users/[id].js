import NavbarContainer from "../../components/NavbarContainer";
import styles from "../../styles/User.module.scss";

export default function User({ user }) {
  return (
    <NavbarContainer keywords={`User Page, ${user.name}`}>
      <div className={styles.name}>
        user name and id = {user.name + " " + user.id}
      </div>
    </NavbarContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();

  return {
    props: { user },
  };
}
