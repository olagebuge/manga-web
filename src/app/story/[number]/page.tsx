import Image from "next/image";

const singleStory = async ({ params }: { params: { number: string } }) => {
  const res = await fetch(`http://localhost:8080/api/story/${params.number}`);
  const data = await res.json();
  const foundStory = data.foundStory;

  return (
    <section className="w-[850px] mx-auto py-10 flex gap-3">

      <div className="w-[150px] h-[150px] relative">
        <Image 
          fill         
          src={`http://localhost:8080/${foundStory.author}/${foundStory.cover}`}
          alt={`${foundStory.title}故事封面`}           
          sizes="(max-width: 768px) 100px, (max-width: 1200px) 120px"  
          className="rounded-full"      
        />
      </div>

      <div>
        <h1 className="text-xl">{foundStory.title}</h1>
      </div>
    </section>
  );
};

export default singleStory;
