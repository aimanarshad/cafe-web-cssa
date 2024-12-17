import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2D3748", // bg-gray-800
        color: "#CBD5E0", // text-gray-300
        paddingTop: "2rem", // py-8
        paddingBottom: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px", // container
          margin: "0 auto", // mx-auto
          textAlign: "center", // text-center
        }}
      >
        {/* Cafe Name and Description */}
        <div style={{ marginBottom: "1.5rem" }}> {/* mb-6 */}
          <h3
            style={{
              fontSize: "1.5rem", // text-2xl
              fontWeight: "bold", // font-bold
              color: "white", // text-white
            }}
          >
            Cozy Café
          </h3>
          <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}> {/* text-sm mt-2 */}
            Your favorite spot for coffee and comfort.
          </p>
        </div>

        {/* Social Media Links */}
        <div style={{ marginBottom: "1.5rem" }}> {/* mb-6 */}
          <Link
            href="https://www.facebook.com"
            style={{
              margin: "0 0.5rem", // mx-2
              color: "#CBD5E0", // text-gray-300
              textDecoration: "none",
              transition: "color 0.3s",
            }}
          >
            Facebook
          </Link>
          <Link
            href="https://www.instagram.com"
            style={{
              margin: "0 0.5rem",
              color: "#CBD5E0",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
          >
            Instagram
          </Link>
          <Link
            href="https://www.twitter.com"
            style={{
              margin: "0 0.5rem",
              color: "#CBD5E0",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
          >
            Twitter
          </Link>
        </div>

        {/* Contact Information */}
        <div style={{ fontSize: "0.875rem" }}> {/* text-sm */}
          <p>&copy; 2024 Cozy Café. All rights reserved.</p>
          <p style={{ marginTop: "0.25rem" }}> {/* mt-1 */}
            123 Main Street, Hometown, Country | Call us: (123) 456-7890
          </p>
        </div>
      </div>
    </footer>
  );
}
