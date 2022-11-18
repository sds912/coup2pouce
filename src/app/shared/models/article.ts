import { Author } from "./author";

export interface Article {
  uid: string;
  title: string;
  content: string;
  createdAt: string;
  lang: string;
  cover: string;
  author: Author;
}
