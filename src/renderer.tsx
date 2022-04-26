/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

console.log(
  '👋 This message is being logged by "renderer.js", included via webpack'
);
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./browser/App";
import * as Sentry from "@sentry/electron/renderer";

Sentry.configureScope(function (scope) {
  scope.addEventProcessor(function (event, hint) {
    // Add anything to the event here
    // returning null will drop the event
    console.log("addEventProcessor");
    console.log(event);
    return event;
  });
});

Sentry.init({
  dsn: "",
  sampleRate: 1.0,
  release: "1.0.1",
  debug: true,
  beforeSend: (event) => {
    console.log("before send");
    return event;
  },
});

ReactDOM.render(<App />, document.getElementById("root"));
