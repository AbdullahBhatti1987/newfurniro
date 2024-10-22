import React from "react";
import PageTop from "../components/PageTop";
import BlogAllLarge from "../components/BlogAllLarge";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import InputwithSearch from "../components/InputwithSearch";
import Heading from "../components/Heading";
import BlogCategoryList from "../components/BlogCategoryList";
import BlogPost from "../components/BlogPost";

function Blog() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]); 

  return (
    <div>
      <PageTop heading={"Blog"} linkName={"Blog"} />
      <div>
        <div className="w-10/12 mx-auto flex flex-row gap-8 md:gap-12 lg:gap-24 py-12">
          <div className="left w-8/12 flex flex-col">
            <BlogAllLarge />
          </div>

          <div className="right w-4/12 ">
            <div className="searchBlog text-lg">
              <InputwithSearch />
            </div>
            <div className=" CategoryBlog">
              <Heading text={"Category"} className={"text-start"} />
              <BlogCategoryList />
            </div>
            <div className=" RecentPost">
              <Heading text={"Recent Post"} className={"text-start"} />
              <div className="flex flex-col gap-2 md:gap-4 lg:gap-8">
                <BlogPost />
                <BlogPost />
                <BlogPost />
                <BlogPost />
                <BlogPost />
              </div>
            </div>
          </div>
        </div>
        <div className="pagination w-10/12 mx-auto">
          <div className="w-1/2 mx-auto flex flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 py-4">
            <button className="focus:bg-orange-400 lightColor w-6 md:w-8 lg:w-12 h-6 md:h-8 lg:h-12 text-sm md:text-md lg:text-lg rounded-sm md:rounded-md lg:rounded-lg hover:bg-orange-400 hover:text-white">1</button>
            <button className="focus:bg-orange-400 lightColor w-6 md:w-8 lg:w-12 h-6 md:h-8 lg:h-12 text-sm md:text-md lg:text-lg rounded-sm md:rounded-md lg:rounded-lg hover:bg-orange-400 hover:text-white">2</button>
            <button className="focus:bg-orange-400 lightColor w-6 md:w-8 lg:w-12 h-6 md:h-8 lg:h-12 text-sm md:text-md lg:text-lg rounded-sm md:rounded-md lg:rounded-lg hover:bg-orange-400 hover:text-white">3</button>
            <button className="lightColor px-6 md:px-8 lg:px-12 h-6 md:h-8 lg:h-12 text-sm md:text-md lg:text-lg rounded-sm md:rounded-md lg:rounded-lg hover:bg-orange-400 hover:text-white">Next</button>
    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
