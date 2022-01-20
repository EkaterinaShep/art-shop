function createUserDto(user) {
  const userDto = Object.entries(JSON.parse(JSON.stringify(user))).filter(
    (entry) => {
      const key = entry[0];

      if (key !== 'password' && key !== 'activationLink') {
        return entry;
      }
    }
  );

  return Object.fromEntries(userDto);
}

export { createUserDto };
