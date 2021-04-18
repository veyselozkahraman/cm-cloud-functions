import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);

export const getFile = (): unknown => {
  try {
    let file = {};
    admin.storage().bucket().file("conf.json")
        .download(function(err, contents) {
          if (!err) {
            file = JSON.parse(contents.toString("utf8"));
          }
        });
    return Object.assign({}, file);
  } catch (error) {
    return {error};
  }
};

