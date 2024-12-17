import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <div
          style={{
            border: "5px solid #ffffff", // 5px solid white border
          }}
        >
          <Image
            src="/nav.png" // Path to the image
            alt="cafe" // Alternative text
            width={1350} // Width of the image
            height={400} // Height of the image
          />
        </div>
      </main>
    </>
  );
}