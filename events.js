import EventEmitter from "events";

const emitter = new EventEmitter();

// listen to the "login" event
emitter.on("login", (username) => {
  console.log(`${username} has logged in`);
});

// emit the "login" event
emitter.emit("login", "Alice");
