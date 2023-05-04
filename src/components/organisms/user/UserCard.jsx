import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDl>
        <dt>Mail:</dt>
        <dd>{user.email}</dd>
        <dt>Tel:</dt>
        <dd>{user.phone}</dd>
        <dt>Compnay:</dt>
        <dd>{user.company.name}</dd>
        <dt>Web:</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
    font-weight: bold;
  }
  dd {
    padding-left: 48px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
