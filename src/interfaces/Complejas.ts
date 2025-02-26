(()=>{

    interface Client{
        name:string;
        age?:number;
        address:Address;
        getFullAddress(id:string):string;
           
    }
    
    interface Address{
        id:number;
        zip:string;
        city:string
    }

    const client:Client={
        name:'Fernando',
        age:33,
        address:{
            id:123,
            zip:'123456',
            city:'Ottawa'
        },
        getFullAddress(id:string){
            return `${this.address.city}, ${this.address.zip}`
        }
        
    }
    const client2:Client={
        name:'Melissa',
        age:33,
        address:{
            id:123,
            zip:'123456',
            city:'Ottawa'
        },
        getFullAddress(id:string){
            return `${this.address.city}, ${this.address.zip}`
        }
    }
    
})()