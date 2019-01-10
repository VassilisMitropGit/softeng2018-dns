import * as express from  'express';
import ProductRouter from './ProductRouter';

type Request = express.Request;
type Response = express.Response;

const MainRouter = express.Router();

export default function (
    app: express.Application
) {
    app.use('/observatory/api', MainRouter);
    
    MainRouter
    .get('/', (req: Request, res: Response) => {
        console.log("Hit on /observatory/api");        
        res.send("NotImplementedError");
    })
    .get('/login', (req: Request, res: Response) => {
        console.log("Hit on /observatory/api/login");
        res.send("NotImplementedError");
    })
    .get('logout', (req: Request, res: Response) => {
        console.log("Hit on /observatory/api/logout");
        res.send("NotImplementedError");
    })
    .use('/products', new ProductRouter().router);
    
    // MainRouter.use('/shops', shopRouter);
    // MainRouter.use('/prices', priceRouter);
    
}