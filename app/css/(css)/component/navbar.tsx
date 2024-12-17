import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav
        style={{
          height: "70px",
          backgroundColor: "black",
          color: "white",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Equivalent to grid-cols-4
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            textAlign: "center",
            margin: "0",
            padding: "0",
            listStyleType: "none", // Removes bullet points
          }}
        >
          <li style={{ marginTop: "16px", fontSize: "2rem" }}>
            <Link href="/">Home</Link>
          </li>
          <li style={{ marginTop: "16px", fontSize: "2rem" }}>
            <Link href="/aboutUs">AboutUs</Link>
          </li>
          <li style={{ marginTop: "16px", fontSize: "2rem" }}>
            <Link href="/menu">Menu</Link>
          </li>
          <li style={{ marginTop: "16px", fontSize: "2rem" }}>
            <Link href="/where">Where</Link>
          </li>
          <li style={{ marginTop: "16px", fontSize: "2rem" }}>
            <Link href="/contactUS">ContactUs</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
