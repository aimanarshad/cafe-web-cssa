import Image from "next/image";

export default function Where() {
  return (
    <>
      <div
        style={{
          marginTop: "2.25rem",
          marginBottom: "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "300px",
        }}
      >
        <h1
          style={{
            backgroundColor: "#475569", // slate-600
            color: "white",
            fontSize: "60px",
            textAlign: "center",
            marginTop: "2.25rem",
            marginBottom: "1.5rem",
            width: "800px",
          }}
        >
          WHERE TO FIND US
        </h1>
        <p style={{ fontSize: "30px", color: "black" }}>
          Find us at some address at some place.
        </p>
        <Image
          src="/map2.png" // Path to the image
          alt="cafe" // Alternative text
          width={750} // Width of the image
          height={240} // Height of the image
          style={{ marginTop: "2.25rem", marginBottom: "2.25rem" }}
        />
        <p style={{ fontSize: "24px" }}>
          <span style={{ fontWeight: "bold" }}>FYI!</span> We offer full-service
          catering for any event, large or small.
          <br /> We understand your needs and we will cater the food to satisfy the
          <br />
          biggest criteria of them all, both look and taste.
        </p>
        <br />
        <p style={{ fontSize: "24px" }}>
          <strong>Reserve</strong> a table, ask for today's special or just send us
          a message:
        </p>
      </div>
    </>
  );
}
