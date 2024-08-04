# Dynamic Routes
When you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time or prerendered at build time.

## Convention
A Dynamic Segment can be created by wrapping a file or folder name in square brackets: [segmentName]. For example, [id] or [slug].

Dynamic Segments can be accessed from useRouter.

## Example
For example, a blog could include the following route pages/blog/[slug].js where [slug] is the Dynamic Segment for blog posts.

```js
import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return <p>Post: {router.query.slug}</p>
}
```

| Route                 | Example URL | Params           |
|-----------------------|-------------|------------------|
| pages/blog/[slug].js  | /blog/a     | { slug: 'a' }    |
| pages/blog/[slug].js  | /blog/b     | { slug: 'b' }    |
| pages/blog/[slug].js  | /blog/c     | { slug: 'c' }    |

[Dynamic Routes Documenation](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#convention)