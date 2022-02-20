import { useState, useEffect } from 'react';

import { User } from '../shared/modules/user/model';
import { getUsers } from '../shared/modules/user/api/get-users';

export interface HookData {
  users: User[];
}

const useAdmin = (): HookData => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const _users = await getUsers();

      setUsers(_users);
    })();
  }, []);

  return {
    users,
  }
};

export default useAdmin;
