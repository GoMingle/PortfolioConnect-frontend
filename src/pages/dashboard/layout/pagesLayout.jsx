import { PlusCircleIcon } from "lucide-react"

const PagesLayout = ({ headerText, buttonText, children, onClick }) => {
  return (
    <div className="p-10 flex flex-col gap-y-16 ">
      <div className="flex mt-10">
        <h1 className="text-3xl font-bold text-teal-400">{headerText}</h1>
        <button className="bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-white font-bold   focus:outline-none focus:shadow-outline px-6 py-2 ml-auto rounded-lg flex gap-x-2" onClick={onClick}>
          <PlusCircleIcon />
          {buttonText}
        </button>
      </div>
      <div>{children}</div>
    </div >
  )
}

export default PagesLayout;