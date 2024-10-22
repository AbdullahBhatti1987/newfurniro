import React from "react";

function BlogPost() {
  return (
    <div className="w-full px-2 md:px-4 lg:px-6 flex flex-row justify-stretch items-center gap-4">
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/2e2c/01ab/8b94b8e3a17bbb18c564006d557e73b1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jzlgFDsU0GEql0cnPf1jogqp8hwb9ms0unYKZtlC6wxjZJ5BrbMtXaZFQRjcvkSZuFIk3oLVA8L1HKuMViNWIxBusqwVKUFPVW33Yy-bPVm1-4FeGipMkzv1qNXT4vyMaS26ZhosIkdVByKSeu4~A3M48G~ZSnpmc7-gnFNdf5IjEaiCamLei8LZFVE00-vqW-VdwHpGxxskWosmqE40iHnGaGUztQB~LGbnlIxTMhgiV4Inqh9CJX1nB3~e-lJg3Ljzl1VxSS9hU1I7xwoeDQvcv3lRqOm9sXQxznABbxWN6yuOgOftH4MBBeMFUL-H10QwscbWb24zFkVFUnuRkw__" alt="" 
        className="rounded-lg h-24" />
      </div>
      <div className="flex flex-col justify-center items-start">
        <p className="text-wrap text-sm md:text-md lg:text-lg">Going all-in with millennial design</p>
        <p className="text-gray-400 text-sm md:text-md lg:text-lg">03 Aug 2022</p>
      </div>
    </div>
  );
}

export default BlogPost;
