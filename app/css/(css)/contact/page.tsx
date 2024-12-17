export default function Contact() {
    return (
      <>
        <div
          style={{
            marginTop: "2.25rem",
            marginBottom: "1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "2.75rem",
            marginRight: "2.75rem",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              border: "4px solid black",
              color: "black",
            }}
          >
            <input
              style={{
                height: "90px",
                fontSize: "40px",
                backgroundColor: "#1E293B", // gray-900
                color: "white",
                padding: "0.5rem",
                border: "none",
              }}
              type="text"
              placeholder="NAME"
            />
            <input
              style={{
                height: "90px",
                fontSize: "40px",
                backgroundColor: "#1E293B", // gray-900
                color: "white",
                padding: "0.5rem",
                border: "none",
              }}
              type="text"
              name="people"
              placeholder="How many People"
            />
            <input
              style={{
                height: "90px",
                fontSize: "40px",
                backgroundColor: "#1E293B", // gray-900
                color: "white",
                padding: "0.5rem",
                border: "none",
              }}
              type="datetime-local"
              value="2020-11-16T20:00"
            />
            <input
              style={{
                height: "90px",
                fontSize: "40px",
                backgroundColor: "#1E293B", // gray-900
                color: "white",
                padding: "0.5rem",
                border: "none",
              }}
              type="text"
              placeholder="Message \\ Special requirements"
            />
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                height: "90px",
                width: "400px",
                fontSize: "40px",
                marginLeft: "200px",
                cursor: "pointer",
                border: "none",
              }}
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </>
    );
  }
  