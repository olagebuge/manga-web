import Link from "next/link";
import { NewStory } from "@/components/newStory";
import { ApiData } from "@/components/apidata";
const Home = async ({}) => {
  return (
    <section className="flex flex-col items-center mt-5">
      <div className="flex items-center justify-between w-[840px]">
        <h1 className="h1title">最新作品</h1>
        <Link href="#">更多作品</Link>
      </div>
      <NewStory />
      <ApiData />
    </section>
  );
};

export default Home;
