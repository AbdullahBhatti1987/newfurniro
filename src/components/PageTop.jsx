import React from 'react'
import { Component } from "../components/Breadcrumb";

function PageTop({heading, linkName, to}) {
  return (
    <div className="relative lg:h-56 md:h-48 h-36 overflow-hidden flex justify-center items-center">
        <img
          className="w-fit blur-sm opacity-50"
          src="../../images/Rectangle 1.jpg"
          alt=""
        />
        
        <div className="absolute w-full h-full flex flex-col justify-center items-center">
        <img
              src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V-KgMF65bBpedJXfxnEh5Re44eKl0ptjo1vHE0H2caKlZSKxSiipCgF9xMEBLT8rrCzA4qLXt6vUNroksYtvS2SrZ4PFU1TG6OtrH5UjO~XMt8JFfNVgS~fQzJiRvpPn7hvXPyXfdgVMgVfyKtFgkwlDXg7B9QBgKybRWGg8BTCd5RlnYtNW57N4FcL3m9o64gdFFannJlge4WJFhm1UKBfZ3js-VcQb6DhAmaNCdg9XL8cr0cbT68Y6XV6g1S3IZcJUjmWtbQhteIxuhhMdTsAiglZLBo1WRY6tIoLAz3Sjq8xJxydvHnf76FX-HmucGkl6FgUjLxbUYIiwEPPCNw__"
              className="lg:w-16 md:w-12 w-8 transition translate-y-4 "
              alt="Flowbite React Logo"
            />
          <h1 className=" text-center lg:text-4xl md:text-2xl text-xl font-semibold mb-4">                       
            {heading}
          </h1>
          <Component linkName={linkName} to={to} />
        </div>
      </div>
  )
}

export default PageTop