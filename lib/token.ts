import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!; 

export const signToken = (user: { id: string; email: string }) => {
  return jwt.sign(user, JWT_SECRET, { expiresIn: "7d" });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return null;
  }
};
