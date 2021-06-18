import * as dayjs from "dayjs";

const allPosts = import.meta.glob('/src/routes/blog/*/*/*.svx');

export async function get() {

  const posts = Object.entries(allPosts)
    .map(async ([path, frontmatter]) => {
      // Pull slug from internal path
      const ext = path.split(/\./).pop();
      const slug = path
        .replace(/^\/src\/routes/, '')
        .replace(ext, '')
        .replace(/\.$/, '');
      const fm = await frontmatter();
      // Extract named metadata in yaml frontmatter
      let { title, date, description } = fm.metadata;
      // Ok so dayjs isn't working? Native JS date format it is...
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
      body: res.sort((a, b) => b.date - a.date)
    }
  })
}


