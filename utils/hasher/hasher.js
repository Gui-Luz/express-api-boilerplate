import bcrypt from 'bcrypt'

const saltRounds = 10

export async function hasher (password) {
  // const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, saltRounds)
  return hash
}
