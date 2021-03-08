import * as express from "express"
import apiRouter from "./routes"
import * as morgan from "morgan"
import config from "./congif"
import { nextTick } from "process"

const app = express()

app.use("/api", apiRouter)
app.use(express.static("public"))
app.use(express.json())
app.use(morgan("dev"))
app.use((err: Error, req: express.Request, res : express.Response, next: express.NextFunction) => {
    res.status(500).json({name: err.name, msg: err.message})
})
app.use("*", (err: Error,req: express.Request, res: express.Response, next: express.NextFunction) => {
try {
    if(err) next(err);
    res.status(404).json({msg: "Requested route not found"})
    
} catch (error) {
    next(error);
    
}
})




app.listen(config.port, () => console.log(`The server is listening on port ${config.port} `))