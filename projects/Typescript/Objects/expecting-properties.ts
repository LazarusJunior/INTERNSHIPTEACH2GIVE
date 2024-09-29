interface user {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface PartialUser {
  name: string;
  email: string;
}

const fetchUser = async (): Promise<PartialUser> => {
  const response = await fetch("/api/user");
  const user: User = await response.json();
  return {
    name: user.name,
    email: user.email
  };
};

const example = async () => {
  const user = await fetchUser();

  //type test = Expect<Equal<typeof user, { name: string; email: string }>>;
};
