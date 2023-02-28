import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import hyperController from '@controllers/customer/hyperSplit';

// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    PayOut: '/PayOut'
} as const;

/////////////////////// Normal Checkout ///////////////////////
router.post(p.PayOut, async (req: any, res: Response) => {
    const data = await hyperController.PayOut(req.body);
    return res.status(OK).send({ data, code: OK, message:'success',result:data});
});

// Export default
export default router;