import { Router } from 'express';
import hyperSplit from './hyperSplit';
const baseRouter = Router();
console.log("enter1")

// Setup routers
baseRouter.use('/hyperSplit', hyperSplit);


// Export default.
export default baseRouter;