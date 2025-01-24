import React from "react"
import withShimmerLoading from "./lib/withShimmerLoading"

const P = withShimmerLoading((props: any) => <p {...props} />)
const H1 = withShimmerLoading((props: any) => <h1 {...props} />)
const Image = withShimmerLoading((props: any) => <img {...props} />)
const Button = withShimmerLoading((props: any) => <button {...props} />)
const Input = withShimmerLoading((props: any) => <input {...props} />)
const Select = withShimmerLoading((props: any) => <select {...props} />)

function App() {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <button
        onClick={() => setIsActive(!isActive)}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Toggle Skeleton
      </button>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "20px" }}
      >
        {/* Sidebar */}
        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <H1 isLoading={isActive}>Dashboard</H1>
          <P isLoading={isActive} style={{ margin: "10px 0" }}>
            Welcome to your dashboard! Here you can manage your data.
          </P>
          <Button
            isLoading={isActive}
            style={{
              padding: "10px 20px",
              border: "none",
              backgroundColor: "#007BFF",
              color: "white",
              borderRadius: "4px",
            }}
          >
            Manage Settings
          </Button>
          <Input
            isLoading={isActive}
            placeholder="Search..."
            style={{
              marginTop: "20px",
              padding: "10px",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Main Content */}
        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <H1 isLoading={isActive}>Your Profile</H1>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Image
              isLoading={isActive}
              src="https://via.placeholder.com/150"
              alt="Profile Avatar"
              style={{ borderRadius: "50%", width: "100px", height: "100px" }}
            />
            <div>
              <P isLoading={isActive} style={{ marginBottom: "5px" }}>
                Name: John Doe
              </P>
              <P isLoading={isActive} style={{ marginBottom: "5px" }}>
                Email: john.doe@example.com
              </P>
              <P isLoading={isActive}>Member since: January 2023</P>
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <H1 isLoading={isActive}>Recent Activities</H1>
            <P isLoading={isActive}>Logged in from New York</P>
            <P isLoading={isActive}>Updated account settings</P>
            <P isLoading={isActive}>Uploaded a new profile picture</P>

            <div style={{ marginTop: "20px" }}>
              <Image
                isLoading={isActive}
                src="https://via.placeholder.com/300"
                alt="Example Image"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
              <Select
                isLoading={isActive}
                style={{
                  marginTop: "10px",
                  padding: "10px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Select>
              <Input
                isLoading={isActive}
                placeholder="Enter your comments..."
                style={{
                  marginTop: "10px",
                  padding: "10px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
