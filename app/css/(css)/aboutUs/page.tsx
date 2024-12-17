import Image from "next/image";
export default function About() {
  return (
    <>
      <div style={{ marginTop: '1.75rem', marginBottom: '2rem' }}>
        <h1
          style={{
            backgroundColor: '#4b5563',
            color: '#fff',
            fontSize: '60px',
            textAlign: 'center',
            paddingLeft: '16rem',
            paddingRight: '16rem',
          }}
        >
          About the cafe
        </h1>

        <p
          style={{
            fontSize: '1.25rem',
            marginTop: '2.5rem',
            marginLeft: '2.25rem',
          }}
        >
          The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut
          <br />
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br />
          <br />
          In addition to our full espresso and brew bar menu, we serve fresh
          made-to-order breakfast and lunch sandwiches,
          <br /> as well as a selection of sides and salads and other good
          stuff.
        </p>

        <div
          style={{
            fontSize: '1.25rem',
            marginTop: '1rem',
            border: '4px solid #6b7280',
            backgroundColor: '#e2e8f0',
            padding: '1rem',
          }}
        >
          <p
            style={{
              fontStyle: 'italic',
              color: '#374151',
              marginLeft: '2.25rem',
            }}
          >
            "Use products from nature for what it's worth - but never too early,
            nor too late." Fresh is the new sweet.
            <br />
            <br />
            Chef, Coffeeist and Owner: Liam Brown
          </p>

          <Image
            src="/about3.webp" // Path to the image
            alt="cafe" // Alternative text
            layout="responsive"
            width={1000} // Width of the image, adjust according to your image's original aspect ratio
            height={30} // Height of the image, adjust accordingly to maintain aspect ratio
            style={{ marginTop: '1.75rem' }}
          />
          <br />
          <br />

          <p style={{ fontSize: '1.5rem', marginLeft: '2.25rem' }}>
            <strong>Opening hours:</strong> everyday from 6am to 5pm.
          </p>
          <br />
          <p style={{ fontSize: '1.5rem', marginLeft: '2.25rem' }}>
            <strong>Address:</strong> 15 Adr street, 5015, NY
          </p>
        </div>
      </div>
    </>
  );
}
