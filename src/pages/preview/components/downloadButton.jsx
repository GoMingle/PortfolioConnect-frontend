import pdfFile from "../../../assets/pdf/pdfFile.pdf"

const DownloadButton = ({file}) => {
  return (
    <div className="flex justify-center mt-10">
    <a 
      href={pdfFile} 
      download 
      className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300"
    >
      Download CV
    </a>
  </div>
  )
}

export default DownloadButton