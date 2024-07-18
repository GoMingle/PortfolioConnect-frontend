import { FallingLines } from "react-loader-spinner";

const PageLoader = () => {
  return (
    <div className="h-s flex items-center justify-center">
         <FallingLines
                color="#27AD9F"
                width="50"
                visible={true}
                ariaLabel="falling-circles-loading"
              />
  
    </div>
  )
}

export default PageLoader