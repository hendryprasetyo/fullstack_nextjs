import db from "../../../libs/db";
import jwt from "jsonwebtoken";

export default async function refreshToken(req, res) {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(403).end();
    const user = await db("users").where({
      refresh_token: refreshToken,
    });
    if (!user[0]) return res.status(403).end();
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded) => {
      if (err) return res.status(403).end();
      const userId = user[0].id;
      const email = user[0].email;
      const accesToken = jwt.sign(
        {
          userId,
          email,
        },
        process.env.ACCESS_TOKEN,
        {
          expiresIn: "1d",
        }
      );
      res.json({
        accesToken,
      });
    });
  } catch (error) {
    console.log(error);
  }
}
