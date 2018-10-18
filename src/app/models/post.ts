import { User } from './user';

export class Post {
    creationDate: Date;

    constructor(public title: string, public content: string, public author: User) {
        this.creationDate = new Date();
        const dateString = this.creationDate.toLocaleDateString;
        console.log(`Post created on: ${dateString}`);
    }
}
