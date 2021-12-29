
// import {Pact} from "@pact-foundation/pact"
// import { Matchers } from "@pact-foundation/pact"
// const {eachLike,like} = Matchers
// import GuestLadgerClient from "./src/GuestLadgerClient"
const {eachLike,like} = require('@pact-foundation/pact').Matchers
const GuestLadgerClient = require('./src/GuestLadgerClient').GuestLadger
const path = require('path')
const Pact = require('@pact-foundation/pact').Pact

const provider = new Pact({
    consumer: 'GuestLadgerClient',
    provider: 'GuestLadgerApi',
    log: path.resolve(process.cwd(),'logs','pact.log'),
    logLevel:"warn",
    dir: path.resolve(process.cwd(),'pacts'),
    spec:2
})
const newGuestLadger = {email:'new@gmail.com',message:'Hello'}

const newGuestLadger2 = {email:'new@gmail.com',message:'Hello'}
describe('GuestLadgerBook consumer test',()=>{
    before( () => provider.setup());
    afterEach( () => provider.verify());
    after( () => provider.finalize());

    describe("posting new guest ladger",() =>{
        it("posted new guest ladger sucessfully",async () => {
            
            await provider.addInteraction({
                state: 'new guest ladger posted successfuly',
                uponReceiving: 'posting new guest ladger',
                withRequest:{
                    method:'POST',
                    path:'/add',
                    body:{
                        email:'new@gmail.com',
                        message:'Hello'
                    }
                },
                willRespondWith:{
                    status: 200,
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: eachLike({
                        email:'new@gmail.com',
                        message:'Hello'
                    })
                },
            });

            var guestLadgerClient = new GuestLadgerClient(provider.mockService.baseUrl);
            await guestLadgerClient.postGuestLadger(newGuestLadger);
        });
       
    })
    
    describe("get all guest ladger book",() =>{
    
        it("get all guest ladger book successfully",async () => {
            
            await provider.addInteraction({
                state: 'get all guest ladger book successfully',
                uponReceiving: 'get all guest ladger book',
                withRequest:{
                    method:'GET',
                    path:'/book',
                    
                },
                willRespondWith:{
                    status: 200,
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: eachLike({
                        email:'new@gmail.com',
                        message:'Hello'
                    })
                },
            });
            var guestLadgerClient = new GuestLadgerClient(provider.mockService.baseUrl);
            await guestLadgerClient.getGuestLadgerBook();
        });
       
    });
    describe("get a guest ladger book by email",() =>{
    
        it("get guest ladger by email successfully",async () => {
            
            await provider.addInteraction({
                state: 'get guest ladger by email successfully',
                uponReceiving: 'get a guest ladger book by email',
                withRequest:{
                    method:'GET',
                    path:'/book/'+newGuestLadger.email,
                    
                },
                willRespondWith:{
                    status: 200,
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: like({
                        email:newGuestLadger.email,
                        message:newGuestLadger.message
                    })
                },
            });
            var guestLadgerClient = new GuestLadgerClient(provider.mockService.baseUrl);
            await guestLadgerClient.getGuestLadgerByEmail(newGuestLadger.email);
        });
       
    });
})