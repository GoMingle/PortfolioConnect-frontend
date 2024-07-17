import K from "../../../constants";

const Overview = () => {
  return (
    <div className="p-10 bg-teal-500 h-full brightness-100 ">
        <div className="grid grid-cols-3 gap-10">
            {K.OVERVIEW.map(({ icon, text, total}, index) => (
                <div key={index} className="h-40 shadow-lg rounded-lg bg-white p-6 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <span className="text-teal-500">{icon}</span>
                        <span className="text-lg font-semibold text-gray-900">{text}</span>
                    </div>
                  <span className="text-2xl font-bold text-gray-600">{total}</span>
                </div>

            )

            )}
        </div>
    </div>
  )
}

export default Overview;