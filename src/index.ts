import express from "express";
import teamRouter from "./routes/team.route";
import authRouter from "./routes/auth.route"

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/teams", teamRouter);
app.use("/api/v1/auth", authRouter);
const main = async() => {
    try {
        app.listen(3000, () => {
            console.log("Server is running on Port:" + port);
        });
    } catch(error) {
        console.log(error);
    }
};

main();