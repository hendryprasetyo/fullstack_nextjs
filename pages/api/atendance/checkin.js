import db from "../../../libs/db";
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { nas, name } = req.body;

  await db("atendance_list").insert({
    nas: nas,
    name: name,
    status: "in",
  });
  res.status(200).json({
    msg: "checkin successfuly",
  });
}
