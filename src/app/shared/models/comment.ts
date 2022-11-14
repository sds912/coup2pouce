import {User} from './user';

export interface Comment {
    uid: string;
    message: string;
    createdAt: string;
    user: User;
}
