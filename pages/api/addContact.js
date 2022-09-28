const client = require('@sendgrid/client')
client.setApiKey(process.env.SENDGRID_API_KEY);

async function addContact(req, res) {
  try {
    console.log("REQ.BODY", req.body);
   await client.request(req);
  } catch (error) {
    console.log(error);
    //return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default addContact;
