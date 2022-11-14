import { Author } from "./author";

export interface Article {
  uid: string;
  title: string;
  content: string;
  createdAt: string;
  author: Author;
}
