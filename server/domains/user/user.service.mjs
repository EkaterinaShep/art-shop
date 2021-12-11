import * as userRepo from "./user.repository.mjs";

function signUp(user) {
  const {email, password} = user;

  if (userRepo.isThereUser(email)) {
    
  }

const hashPassword = await
}

export {signUp}
