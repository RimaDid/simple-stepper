export class User {
    public firstName: string = '';
    public lastName: string = '';
    public userName: string = '';
    public email: string = '';
    public consent: boolean = false;
    public constructor(data?:Partial<User>) {
        Object.assign(this, data);
    }
}