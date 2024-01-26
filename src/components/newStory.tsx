import Link from "next/link";
import Image from "next/image";

type Props ={
    id:string,
    title:string,
    content:string,
    cover:string,
    author:any,
    public:boolean,
    type:string,
    number:string,
}

const fetchData = async()=>{
    const res = await fetch("https://65af761c2f26c3f2139ad556.mockapi.io/api/v3/posts",{cache:'no-store'});
    const data: Props[] = await res.json();

    //取最新的十筆資料
    const latestTenStories = data.slice(0, 10); 
   
    return latestTenStories;
}


export const NewStory = async() => {
    let stories = await fetchData();

    return(
        <div className="flex flex-wrap w-[840px] gap-5 justify-center">
        {stories &&
          stories.map((post) => (
            <Link  key={post.id} href={`/story/${post.type}-${post.number}`}>   

                <Image src={`${post.cover}`} width={150} height={150} alt="cover" />
                <h3 className="w-[150px] text-sm">{post.author}</h3>     

            </Link>
          ))}
      </div>
    )

}