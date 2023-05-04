import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `foo hoge-${val}`,
    image: "https://source.unsplash.com/1VgfQdCuX-4",
    email: "foo@ex.com",
    phone: "1234-5678",
    company: {
      name: "Ex Co.Ltd."
    },
    website: "https://ex.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>User page</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
