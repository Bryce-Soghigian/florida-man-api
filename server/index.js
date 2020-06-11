const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const storyRouter = require("./routers/stories/stories-router");
const favoritesRouter = require("./routers/favorites/favorites-router");
const usersRouter = require('./routers/user/users-router')
//==========Server Init ==========//
const server = express();
const PORT = process.env.PORT || 5555;

server.listen(PORT, () => {
  console.log(`=======...Server is running on ${PORT}...========`);
});
//=========Server Middleware and config=====//
server.use(cors(), helmet(), express.json());
server.use("/stories", storyRouter);
server.use("/favorites", favoritesRouter);
server.use("/auth",usersRouter)
//===========Server UP endpoint========================//
server.get("/", (req, res) => {
  res.json({ is_server_up: "true" });
});
