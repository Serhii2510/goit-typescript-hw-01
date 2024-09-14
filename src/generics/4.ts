type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>): User {
    const defaultUser: User = {
        name: 'John',
        surname: 'Doe',
        email: '',
        password: '',
    };

    return { ...defaultUser, ...initialValues };
}

const updatedUser = createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});

console.log(updatedUser);
