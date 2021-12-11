import * as userService from "./user.service.mjs"

async function getAll(req, reply) {

}

async function signUp(req, reply) {
  const reqBody = req.body;

await userService.signUp(reqBody)
}

function signIn(req, reply) {}

async function signOut(req, reply) {


function activateAccount() {

}

function refresh(req, reply) {}

export { getAll, signUp, signIn, signOut, activateAccount, refresh};
