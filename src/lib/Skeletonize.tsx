import React from "react"
import withSkeleton from "./withSkeletonHOC"

const P = withSkeleton((props: any) => <p {...props} />)
const Image = withSkeleton((props: any) => <img {...props} />)

function App() {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <div>
      <button onClick={() => setIsActive(!isActive)}>Toggle Skeleton</button>
      <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
        <Image
          isLoading={isActive}
          src="https://img.cdndsgni.com/preview/12161376.jpg"
          alt="Avatar"
          style={{ borderRadius: "50%", width: "50px", height: "50px" }}
        />
        <P isLoading={isActive}>Some text here</P>
      </div>
    </div>
  )
}

export default App
