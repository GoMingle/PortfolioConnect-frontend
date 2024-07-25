import { PlusCircleIcon } from "lucide-react"

const PagesLayout = ({ headerText, buttonText, children, onClick }) => {
  return (
    <div className="p-10 flex flex-col gap-y-16 ">
      <div className="flex mt-6">
        <h1 className="text-3xl font-bold text-white">{headerText}</h1>
        <button className="   hover:bg-gray-700 bg-gray-800 text-white font-bold   focus:outline-none focus:shadow-outline px-6 py-2 ml-auto rounded-lg flex gap-x-2" onClick={onClick}>
          <PlusCircleIcon />
          {buttonText}
        </button>
      </div>
      <div>{children}</div>
    </div >
  )
}

export default PagesLayout;