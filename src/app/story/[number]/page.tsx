import Image from "next/image";

type Props = {
  id: string;
  title: string;
  content: string;
  cover: string;
  author: any;
  public: boolean;
  type: string;
  number: string;
};

const fetchData = async (params: { number: string }): Promise<Props[]> => {
  const match = params.number.match(/^([a-zA-Z]+)-(\d+)$/);
  if (match) {
    const type = match[1];
    const idNumber = match[2];

    //搜尋type及idNumber匹配的資料
    const res = await fetch(
      "https://65af761c2f26c3f2139ad556.mockapi.io/api/v3/posts",
      { cache: "no-store" }
    );
    const data: Props[] = await res.json();
    const singleData = data.filter(
      (item: any) => item.type === type && item.number.toString() === idNumber
    );
    console.log(singleData);
    return singleData;
  }
  return [];
};

const singleStory = async ({ params }: { params: { number: string } }) => {
  let foundStory = await fetchData(params);

  return (
    <section className="w-[850px] mx-auto py-10 flex gap-5">
      <div className="relative w-[180px] h-[180px] ">
      <Image
        src={`${foundStory && foundStory[0].cover}`}
        fill
        alt="cover"
        className="rounded-full"
      />
      </div>
      
      <div className="relative w-[75%]">
        <h3 className="text-lg font-bold">{foundStory && foundStory[0].title}</h3>
        <p>{foundStory && foundStory[0].content}</p>
      </div>
    </section>
  );
};

export default singleStory;
