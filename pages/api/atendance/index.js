import db from "../../../libs/db";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  const data = await db("atendance_list");

  res.status(200).json({
    msg: "success",
    data,
  });
}
