import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import {Request, Response} from "express";

const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

const someUrl = async (req: Request, res: Response) => {
  try {
    const sendObject = {
      someField: "some data test",
    };
    res.status(200).send({
      message: "bir sorun yok",
      data: sendObject,
    });
  } catch {
    res.status(500).json("bir sorun var");
  }
};

const somePostExample = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send({
      // eslint-disable-next-line max-len
      data1: `you sent the following text in the request body: ${req.body.text}`,
      data2: req.body,
    });
  } catch {
    res.status(500).json("bir sorun var");
  }
};


app.get("/", (req, res) => res.status(200).send("Hey there!"));
app.get("/someUrl", someUrl);
app.post("/hello", somePostExample);
exports.app = functions.https.onRequest(app);
