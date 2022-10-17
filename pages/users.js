import React from "react";
import CustomLink from "../components/CustomLink";
import NavbarContainer from "../components/NavbarContainer";

const Users = ({ users }) => {
  return (
    <NavbarContainer keywords={"Users Page"}>
      Users:
      <ul>
        {users.map(({ name, id }) => (
          <li key={id}>
            <CustomLink text={name} href={`/users/${id}`} />
          </li>
        ))}
      </ul>
    </NavbarContainer>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  return {
    props: { users },
  };
}
