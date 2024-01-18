'use client'

import { ObjectId } from "mongoose";
import axios from "axios";
import { useState, useEffect } from "react";

interface Story {
  _id: ObjectId;
  title: string;
  cover: string;
  author: ObjectId;
  public: boolean;
  type: string;
  number: string;
  subscribers: Array<ObjectId>;
  date: Date;
  views: number;
}

export const NewPosts = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get("http://localhost:8080");
        setStories(response.data.stories);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPosts();
  }, []); // [] as the second argument to useEffect makes it run only once when the component mounts

  return<>
  {stories.map((story) => (
    <div key={story._id.toString()}>
      <h3>{story.title}</h3>
    </div>
  ))}
  </>;
};
