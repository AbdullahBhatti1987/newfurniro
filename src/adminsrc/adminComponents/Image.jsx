import {Image} from "@nextui-org/react";

export default function App() {
  return (
    <Image
      width={300}
      height={200}
      src="https://app.requestly.io/delay/1000/https://nextui.org/images/fruit-4.jpeg"
      fallbackSrc="https://via.placeholder.com/300x200"
      alt="NextUI Image with fallback"
    />
  );
}