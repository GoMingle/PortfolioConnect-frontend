import { FallingLines } from "react-loader-spinner"
const Loader = () => {
  return (
    <div className="flex items-center justify-center ">
      <FallingLines
                color="#1F2937"
                width="50"
                visible={true}
                ariaLabel="falling-circles-loading"
              />
    </div>
  )
}

export default Loader