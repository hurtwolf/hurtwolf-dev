export default function Footer(){
  return(
    <div className="mt-10 border-t border-gray-300">
      <div className="flex mt-3">
        <div className="w-2/4">
          <p className="text-sm text-gray-500 font-semibold">Hurtwolf 2020</p>
        </div>
        <div className="w-2/4">
          <div className="flex text-sm text-gray-500 justify-end font-semibold">
            <a className="mr-4 hover:text-gray-900" href="https://twitter.com/hurtwxlf">Twitter</a>
            <a className="mr-4 hover:text-gray-900" href="https://github.com/hurtwolf/hurtwolf-dev">Github Repo</a>
            <a className="hover:text-gray-900" href="https://vercel.com/">Deploy</a>
          </div>
        </div>
      </div>
    </div>
  )
}