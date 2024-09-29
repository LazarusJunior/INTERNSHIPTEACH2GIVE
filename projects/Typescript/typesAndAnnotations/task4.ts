//Exercise 4: Function Types

type User = {
    id: string;
    name: string;
  };
  
  const modifyUser = (users: User[], id: string, makeChange: (user: User) => User) => {
    return users.map((u) => {
      if (u.id === id) {
        return makeChange(u);
      }
      return u;
    });
  };