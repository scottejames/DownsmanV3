import {Injectable} from "@angular/core";
import {IUser} from "./user.model";

@Injectable()
export class UserService {
    private currentUser: IUser;

    // Hack to save having to login every time I test
    constructor(){
        // hack to save having to login every time.
        console.log('Setting current user to (1) to save logging in.....')
        this.currentUser = this.getUserById(1);
    }

    public getUserById(id: number): IUser {
        var user:any =  USERS.find(t => t.id === id);
        return user;
    }
    public isValidUserName(userName:string){
        if (this.getUserByUserName(userName)!=null){
            return true;
        } else{
            return false;
        }

    }
    public getUserByUserName(userName: string) {
        var user :any;
        user = USERS.find(user => user.userName === userName);
        return user;
    }

    public getCurrentUser(){
        return this.currentUser;
    }
    public currentUserIsAdmin(){
        if (this.currentUser == null)
            return false;
        else
            return this.currentUser.admin;
    }
    public loginUser(userName: string, password: string) {
        // Check password later.
        this.currentUser = this.getUserByUserName(userName);
    }
    public logoutUser(){
        this.currentUser = null;
    }

    public isAuthenticated(){
        return !!this.currentUser
    }


    public updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}

const USERS :IUser[]= [
    {
        id: 1,
        userName: 'scottejames',
        admin: true,
        firstName: 'Scott',
        lastName: 'James'
    }, {
        id: 2,
        userName: 'bethmjames',
        admin: false,
        firstName: 'Bethany',
        lastName: 'James'
    }, {
        id: 3,
        userName: 'chrissearle',
        admin: true,
        firstName: 'Chris',
        lastName: 'Searle'
    }


]