import React from 'react'

export default function Loader() {
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
    <div className="flex">
      <img
        src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V-KgMF65bBpedJXfxnEh5Re44eKl0ptjo1vHE0H2caKlZSKxSiipCgF9xMEBLT8rrCzA4qLXt6vUNroksYtvS2SrZ4PFU1TG6OtrH5UjO~XMt8JFfNVgS~fQzJiRvpPn7hvXPyXfdgVMgVfyKtFgkwlDXg7B9QBgKybRWGg8BTCd5RlnYtNW57N4FcL3m9o64gdFFannJlge4WJFhm1UKBfZ3js-VcQb6DhAmaNCdg9XL8cr0cbT68Y6XV6g1S3IZcJUjmWtbQhteIxuhhMdTsAiglZLBo1WRY6tIoLAz3Sjq8xJxydvHnf76FX-HmucGkl6FgUjLxbUYIiwEPPCNw__"
        className="lg:h-16 h-16"
        alt="Flowbite React Logo"
      />
      <span className="self-center whitespace-nowrap text-2xl lg:text-3xl font-bold dark:text-white">
        Furniro
      </span>
    </div>
    <div className="loader"></div>
  </div>
  )
}
