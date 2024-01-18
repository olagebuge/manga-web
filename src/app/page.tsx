import { NewPosts } from "../components/client-newPost";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center mt-5">
        <h1 className="h1title">首頁</h1>
        <NewPosts />
      </section>
    </>
  );
}
