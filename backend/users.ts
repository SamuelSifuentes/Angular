
export class User{
    constructor(public email:string,
        public name: string,
        private password:string){

    }
matches(another: User): boolean{
    return another !== undefined && another.email === this. email && another.password === this.password
}
}

export const users: {[key:string]:User} = {
    "julia@gmail.com": new User('julia@gmail.com','julia','123'),
    "julias@gmail.com": new User('julias@gmail.com','julias','1234')
}