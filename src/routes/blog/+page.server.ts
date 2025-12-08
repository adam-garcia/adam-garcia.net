import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const allPosts = import.meta.glob('/src/routes/*/*/*/*/*.svx');

  const posts = Object.entries(allPosts)
    .map(async ([path, frontmatter]: [string, () => Promise<unknown>]) => {
      const slug = path
        .replace(/^\/src\/routes/, '')
        .replace(/\/\+page\.(svx|svelte)/, '')
      const fm = await frontmatter();
      let { title, date, description } = fm.metadata;
      date = new Date(date);
      const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      let printDate = date.toLocaleDateString('en-US', dateOptions);
      return { slug, title, date, description, printDate }
    });

  // Await all before returning
  return Promise.all(posts).then((res) => {
    return {
      posts: res.sort((a, b) => b.date - a.date)
    }
  })
};
