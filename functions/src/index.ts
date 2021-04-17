import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import {Request, Response} from "express";

const app = express();
app.use(cors({origin: true}));

const someUrl = async (req: Request, res: Response) => {
  try {
    const sendObject = {
      someField: "some data",
    };
    res.status(200).send({
      message: "bir sorun yok",
      data: sendObject,
    });
  } catch {
    res.status(500).json("bir sorun var");
  }
};

app.get("/", (req, res) => res.status(200).send("Hey there!"));
app.get("/someUrl", someUrl);
exports.app = functions.https.onRequest(app);
