export const loadPosts = async () => {
  const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postsJson = await postsResponse.json();

  const postsAndPhotos = await Promise.all(
    postsJson.map(async (post) => {
      const coverResponse = await fetch(`https://picsum.photos/300/200?random=${Math.random()}`);
      const coverUrl = coverResponse.url;

      return {
        ...post,
        cover: coverUrl,
      };
    }),
  );

  return postsAndPhotos;
};
