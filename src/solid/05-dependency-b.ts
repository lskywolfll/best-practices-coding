import { PostProvider } from "./05-dependency-c";

interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private provider: PostProvider) {}

    async getPosts() {
        this.posts = await this.provider.getPosts();

        return this.posts;
    }
}
