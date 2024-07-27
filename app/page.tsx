import dynamic from 'next/dynamic';

const BlogList = dynamic(() => import('@/Components/BlogList'));

export default function Home() {
  return (
    <main>
      <BlogList />
    </main>
  );
}