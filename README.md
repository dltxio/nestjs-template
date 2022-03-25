# NestJS ![build](https://github.com/dltxio/nextjs-template/actions/workflows/build-project.yml/badge.svg)
Template for Back End repos

## NestJS

This app uses [NestJS](https://nestjs.com/) as a (NodeJS) framework.

## env file

The .env file is placed at the root and has to be present for the app to work. Copy/swap the sibling _env.development_ file. Use:

> cp .env.development .env

## Running the app

To run the (NestJS) API:

> yarn  
> yarn build  
> yarn start:dev

Then browse to `localhost:3000/swagger`

## Testing the app

To run the **unit** tests:

> yarn test

To run the end-to-end tests

> yarn test:e2e

## UAT

Replace the values for each key in .env with the token name plus "\_TOKEN". Then make sure there is a Github secret for each of those keys. For example:

> FIREBLOCKS_PRIVATE_KEY: FIREBLOCKS_PRIVATE_KEY_TOKEN

## Endpoints

### accounts

// Get all (vault) accounts
GET accounts

// Get a (vault) account
GET accounts/:accountId

## Installation

To install the solution on a new VM:

```bash
git clone git@github.com:ec-systems/consumer.custody.service.git
cd consumer.custody.service
./install.sh
```

Notes: The VM uses the following SSH PubKey to clone the GitHub repo.

```text
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDA9qnx1qCKNgYTQNzLQD1HF7Skt6uK/qFBJxy1ngaEPD7x1Kq3UqbEvCV8Tvodo5NW5WiCyxyd+J6ypGIE57kkwvnM+z2kXcspfsdWfOZJLQ+7mcEyZQ9wkcBSRcdmGyJjjscJmAdRCyXycoZWSj3KAWQuJOV51uB5xJGJYZVFk5waRMTxFRyo3E/8wXnagWI7O+bEb9MEd01UcCnoRLCkTECOOH/+KfQzRlmbxIN4Kob6Y8UW93A4cs3kRLyQMOJCLcg0ep+K4UGpyFW1nlB+QC12qw96EBFKRSbdSejjXgus9UCIjuVF+qPJXrJlJOOoHajY1qvOPCbEBhsc/N7XHUyKqQiUEfsR5L13M2kenSyOtXwoTw/VxUDhDyi1vxB6/RKmGTfYOLAdQs03LMSCFzQ8ASxwSslqspxpv6FDzV+DT+7CIXTmJV6BOVo05BSeJEE6wk8bc9w74S1szgAuLjani7IWIjhcoLb8SIxo0NNxUSX9Rk9o+OT886lBfHM=
```
