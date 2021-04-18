import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as cors from "cors";
import {Request, Response} from "express";
import * as config from "./config.json";
// import {getFile} from "./storage_handler";
admin.initializeApp(functions.config().firebase);

const cardList = ["3090", "3080", "3070", "3060", "2080", "2070", "2060", "1660", "1080","1070","1060"];

const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

const someUrl = async (req: Request, res: Response) => {
  try {
    const bucket = admin.storage().bucket("gs://cafe-miner.appspot.com");
    const filepath = await bucket.file("conf.json").getSignedUrl({
      action: "read",
      expires: "03-17-2025", // this is an arbitrary date
    });
    res.status(200).send({
      message: "bir sorun yok",
      data: filepath,
    });
  } catch (error) {
    res.status(500).json(error);
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

const getConfigs = async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  if(req.body.key === "%kolayminer%"){

    let foundGpuConfig = "";

    for (const card of cardList){
      if(req.body.gpu.includes(card)){ // found card, check if it is super, ti or base
        
        if(req.body.gpu.includes("super")){

          foundGpuConfig = config.gpu[card + " super"];

        } else if(req.body.gpu.includes("ti")){

          foundGpuConfig = config.gpu[card + " ti"];

        } else {

          foundGpuConfig = config.gpu.card;

        }
      }
    }
    res.status(200).send({ // if it is not found, empty string will be sent, which is handled on client side
      // eslint-disable-next-line max-len
      gpu: foundGpuConfig,
      mining: config.mining,
    });

  } else {
    res.status(500).send({
      // eslint-disable-next-line max-len
      data: ""
    });
  }
}

app.get("/", (req: Request, res: Response) => res.status(200).send("Hey there!"));
app.get("/someUrl", someUrl);
app.post("/hello", somePostExample);
app.post("/get_config", getConfigs);
exports.app = functions.https.onRequest(app);
