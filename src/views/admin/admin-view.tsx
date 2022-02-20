import React, { ReactElement } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import Menu from '../shared/components/menu';
import { H1 } from '../layout/layout.styles';

import { HookData } from './use-admin';
import { Wrapper, Table, Thead, Tbody, Th, Tr, Td } from './admin.styles';

const AdminView: React.FC<HookData> = ({ users }): ReactElement => {
  return (
    <Wrapper>
      <Menu />

      <H1>Users</H1>

      {users.length > 0 ? (
        <Row center="xs">
          <Col>
            <Table cellPadding="0" cellSpacing="0">
              <Thead>
                <Th>First name</Th>
                <Th>Last name</Th>
                <Th>Phone</Th>
                <Th>Email</Th>
                <Th>Avatar</Th>
                <Th>Movie</Th>
                <Th>Sit row</Th>
                <Th>Sit place</Th>
              </Thead>

              <Tbody>
                {users.map((user, idx) => (
                  <Tr key={`user-${idx}`}>
                    <Td>{user.firstName}</Td>
                    <Td>{user.lastName}</Td>
                    <Td>{user.phone}</Td>
                    <Td>{user.email}</Td>
                    <Td>
                      <img
                        src={user.avatarBase64}
                        alt={`${user.firstName} ${user.lastName}`}
                      />
                    </Td>
                    <Td>
                      {user.movie ? (
                        <div>{user.movie.title}</div>
                      ) : (
                        <div>-</div>
                      )}
                    </Td>
                    <Td>{user.sitRow}</Td>
                    <Td>{user.sitPlace}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Col>
        </Row>
      ) : (
        <div>No users yet.</div>
      )}
    </Wrapper>
  );
};

export default AdminView;
