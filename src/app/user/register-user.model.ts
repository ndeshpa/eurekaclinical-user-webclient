export class RegisterUser {
    private _id:number;
    
    private _userName:string;
    
    private _firstName:string;
    
    private _lastName:string;  
    
    private _organization:string;
        
    private _title:string;
        
    private _department:string;
        
    private _email:string;
        
    private _verifyEmail:string;  

    private _password:string;   
    
    private _verifyPassword:string;  
    
    private _authenticationMethod:string;    
            
    constructor() {
        this._authenticationMethod = 'LOCAL';
        this._id = -1;
        this._userName = "";
    }
    
    get id():number {
        return this._id;
    }
    
    set id(value:number) {
        this._id = value;
    }
    
    get username():string {
        return this._userName;
    }
    
    set username(value:string) {
        this._userName = value;
    }

    get firstName():string {
        return this._firstName;
    }
    
    set firstName( value:string ) {
        this._firstName = value;
    }
    
    get lastName():string {
        return this._lastName;
    }
    
    set lastName( value:string ) {
        this._lastName = value;
    }

    get organization():string {
        return this._organization;
    }
    
    set organization( value:string ) {
        this._organization = value;
    }
        
    get title():string {
        return this._title;
    }
    
    set title( value:string ) {
        this._title = value;
    }
        
    get department():string {
        return this._department;
    }
    
    set department( value:string ) {
        this._department = value;
    } 
        
    get email():string {
        return this._email;
    }
    
    set email( value:string ) {
        this._email = value;
    }
 
    get verifyEmail():string {
        return this._verifyEmail;
    }
    
    set verifyEmail( value:string ) {
        this._verifyEmail = value;
    }    
    
    get password():string {
        return this._password;
    }
    
    set password( value:string ) {
        this._password = value;
    }    
    
    get verifyPassword():string {
        return this._verifyPassword;
    }
    
    set verifyPassword( value:string ) {
        this._verifyPassword = value;
    }
    
    get authenticationMethod():string {
        return this._authenticationMethod;
    } 
              
    toJSON() {
        
        let keys: string[] = [
                    'id',
                    'username',
                    'firstName',
                    'lastName',
                    'email',
                    'verifyEmail',
                    'organization',
                    'title',
                    'department',
                    'password',
                    'verifyPassword'
                    
                    ];

        let json = {};
        for (let k of keys)
        {
            json[k] = this[k];
        }
        
        json['type'] = 'LOCAL';
        return json;
        
    }

}



