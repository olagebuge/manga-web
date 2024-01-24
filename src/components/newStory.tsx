import Link from "next/link";
import Image from "next/image";

type Props ={
    _id:string,
    title:string,
    content:string,
    cover:string,
    author:any,
    public:boolean,
    type:string,
    number:string,
}

const fetchData = async()=>{
    const res = await fetch("http://localhost:8080/api/homepage",{cache:'no-store'});
    const data = await res.json();  
    const stories: Props[] = data.stories;    

    //取最新的十筆資料
    const latestTenStories = stories.slice(0, 10); 
   
    return latestTenStories;
}


export const NewStory = async() => {
    let stories = await fetchData();

    return(
        <div className="flex flex-wrap w-[840px] gap-5 justify-center">
        {stories &&
          stories.map((post) => (
            <Link  key={post._id} href={`/story/${post.type}-${post.number}`}>   

                <Image src={`http://localhost:8080/${post.author._id}/${post.cover}`} width={150} height={150} alt="cover" />
                <h3 className="w-[150px] text-sm">{post.title}</h3>     

            </Link>
          ))}
      </div>
    )

}