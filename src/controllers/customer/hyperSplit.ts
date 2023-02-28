import moment from 'moment-timezone';
import express from 'express';
import https from 'https';
import querystring from 'querystring';
import request from 'request-promise';
const router = express.Router();

// PayOut using hypersplit
function PayOut(data:any):Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            const req_data = data;
            var transferData = {
                "configId": 'Your Config Id',// Provided by HyperSplit
                "merchantTransactionId": 'merchantTransactionId', // Payout unique number
                "transferOption": '0',
                "batchDescription": 'Transfer fund to beneficiary',
                "beneficiary": [
                    {
                        "name": 'your account_holder_name',
                        "accountId": 'your account_number',
                        "transferAmount": 'Payout amount',
                        "debitCurrency": 'SAR',
                        "transferCurrency": 'SAR',
                        "bankIdBIC":  'your bank iban_number',
                        "payoutBeneficiaryAddress1": 'your payoutBeneficiaryAddress1',
                        "payoutBeneficiaryAddress2": 'your payoutBeneficiaryAddress2',
                        "payoutBeneficiaryAddress3": 'your payoutBeneficiaryAddress3'
                    }
                ]
            };        
            const options = {
                url: 'https://splits.sandbox.hyperpay.com/api/v1/orders',
                form: transferData,
                headers:{
                    'Content-Type':"application/json",
                    "Authorization":"Bearer Your Token" // Provided by hyperSplit
                }
            };
            request.post(options,async (err:any, res1:any, body:any) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }else{
                    resolve({resData:res1,body:body});
                }            
            });
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}

// New payment getway end here

export default {
    PayOut
} as const;