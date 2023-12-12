import Link from 'next/link'
import getFolders from '../lib/getFolders';

export default async function Page() {
  const folders = await getFolders();
  const posts = await Promise.all(
    folders.map(async (folder) => {
      const { metadata } = await import(`../post/${folder.name}/page.mdx`);
      const post = {
        name: folder.name,
        metadata
      };
      return post;
    }
  ));
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-4xl">
      <h1>Posts</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.name}>
            <Link href={`/post/${p.name}`}>
              {p.metadata.title}
            </Link>
          </li>
        ))}
      </ul>
    </div> 
  )
}