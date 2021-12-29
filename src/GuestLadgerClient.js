import axios from "axios";



 export default class GuestLadgerClient{

    constructor(url){
        if(url == undefined || url == "") url = process.env.GUESTLADGER_API_BASE_URL;
        if(url.endsWith("/")) url = url.substr(0,url.length-1);
        this.url = url;
    }
    toPath = (path) =>{
        if(!path.startsWith("/")) path = "/" + path
        return this.url + path;
    }
    async postGuestLadger(guestLadgerObject){
        return axios.post(this.toPath("/add"),guestLadgerObject)
            .then(r => r.data);
    }
    async getGuestLadgerBook(){
        return axios.get(this.toPath("/book"))
            .then(r => r.data);
    }
    async getGuestLadgerByEmail(email){
        return axios.get(this.toPath("/book/" + email))
            .then(r => r.data);
    }
}

  