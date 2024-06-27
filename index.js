import express from "express";
import { userRouter } from "./modules/users/users.routes.js";
import postsRouter from "./modules/posts/posts.routes.js";
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use("/auth", userRouter);
app.use("/posts", postsRouter);
app.listen(port, () => console.log(`server is running on port ${port}`));
