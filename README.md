## HyperSplit using nodejs with TypeScript

## Introduction
    HyperSplit using nodejs with TypeScript. we are providing demo apis for payout.
    HyperSplit provide method for payout like - payout to bank

    1. Payout method :-
        For payout we need to provide config Id(provided by hypersplit team),merchantTransactionId(Unique for every payout),bank account number,account holder name,payout amount,debit currency, transfer currency,
        bank iban number,payout Beneficiary Address(optional).


## Setup Steps:
### Install project dependency
`npm install`
### local server
`npm run start:dev`
### prod build
`npm run build`
### prod build run
`node dist/index.js`

## HyperSplit payout demo apis - 
  #### HyperSplit payout demo api for payout in bank
  `{{Your Ip}}/api/v1/hyperSplit/PayOut`
