export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-4xl">
    {children}
    <p>Post author: </p>
    <p>Written on: </p>
    </article>
  )
}