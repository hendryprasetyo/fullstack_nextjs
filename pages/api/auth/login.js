import db from "../../../libs/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Cookies from "cookie";

const secretAccess = process.env.ACCESS_TOKEN;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { username, password } = req.body;

  const checkUser = await db("users").where({ username }).first();

  if (!checkUser)
    return res.status(404).json({
      msg: "Ups... Username not found",
    });

  const checkPassword = await bcrypt.compare(password, checkUser.password);

  if (!checkPassword)
    return res.status(400).json({
      msg: "Ups... Incorect password",
    });

  const token = jwt.sign(
    { id: checkUser.id, username: checkUser.username },
    secretAccess,
    {
      expiresIn: "1d",
    }
  );

  const refreshToken = jwt.sign(
    { id: checkUser.id, username: checkUser.username },
    secretAccess,
    {
      expiresIn: "1d",
    }
  );

  await db("users").update({
    refresh_token: refreshToken,
  });

  res.setHeader(
    "Set-Cookie",
    Cookies.serialize("token", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60,
      secure: process.env.NODE_ENV !== "developmnet",
      path: "/",
    })
  );
  res.status(200).json({
    token,
  });
}
