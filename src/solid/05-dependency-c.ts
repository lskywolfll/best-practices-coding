import LocalPosts from "./local-database.json";

// esto se debe separar en una carpeta/archivo descriptivo para el post
export abstract class PostProvider {
  abstract getPosts(): Promise<any[]> | any[];
}

// esto se debe separar en una carpeta/archivo descriptivo para el post
export class LocalDataBaseService implements PostProvider {
  constructor() {}

  async getPosts() {
    return [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
      },
    ];
  }
}

// esto se debe separar en una carpeta/archivo descriptivo para el post
export class JsonDatabaseService implements PostProvider {
  private localPosts = LocalPosts;

  async getPosts() {
    return this.localPosts;
  }
}

// Driver (Aquitectura Hexagonal)
// Seccion -> domain (negocio propio), Web Service (Servicio de terceros), Database
// Web Api Service, WebApiPostService, PostProvider
// https://jsonplaceholder.typicode.com/posts
export class WebApiPostService implements PostProvider{
    async getPosts(){
        try {
            const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await resp.json();
            return data;
        } catch (error) {
            throw new Error(JSON.stringify(error));
        }
    }
}