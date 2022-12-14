import db from "../../../libs/db";

export default async function handler(req, res) {
  if (req.method !== "DELETE") return res.status(405).end();
  const { nas, password } = req.body;
  const checkUser = await db("users").where({ nas }).first();
  const checkPass = await db("users").where({ password }).first();

  //   if (checkPass !== password)
  //     return res.status(400).json({
  //       msg: "passsword",
  //     });

  if (!checkUser)
    return res.status(404).json({
      msg: "User NotFound!",
    });

  try {
    await db("users").delete({
      password,
    });
    res.status(200).json({
      msg: "successfuly",
    });
  } catch (error) {
    if (error)
      return res.status(400).json({
        msg: "incorect password",
      });
  }
}
