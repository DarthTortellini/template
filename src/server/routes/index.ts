import * as express from "express"

const router = express.Router()

router.get(
    "/test",
    (req: express.Request, res : express.Response, next :express.NextFunction) => {
        try {
            res.status(200).json({msg: "Hello World"})
        } catch (error) {
            next(error)
        }
        
    }
)


export default router