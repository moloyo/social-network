import { User } from './user';

export class Post {
    public creationDate: Date;
    public author: User;

    constructor(public title: string, public content: string) {
        this.creationDate = new Date();
        const dateString = this.creationDate.toLocaleDateString;
        console.log(`Post created on: ${dateString}`);
    }
}
