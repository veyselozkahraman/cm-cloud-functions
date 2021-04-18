import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);

export const getFile = (): Record<string, unknown> => {
  try {
    let file: Record<string, unknown> = {asd: "ASD"};
    admin.storage().bucket().file("conf.json").
        download(function(err, contents) {
          if (!err) {
            file = JSON.parse(contents.toString("utf8"));
            return file;
          } else {
            file = {err};
            return file;
          }
        });
    return file;
  } catch (error) {
    return {error};
  }
};

