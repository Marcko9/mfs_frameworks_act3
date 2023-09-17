import data from "./posts.json";

export function getPosts(){
    // return data.posts;
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve([...data.posts]);
        }, 3000);
    });
}