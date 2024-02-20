/* Components */
import { Counter } from "./components/Counter/Counter";

export default function IndexPage() {
  return (
    <div>
        {/* <!-- navigation --> */}
        <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
            >
                <a href="index.html">
                    <img
                        className="h-10"
                        src="/assets/lws.svg"
                        alt="Learn with Sumit"
                    />
                </a>
                <a
                    href="add-video.html"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                >
                    + Add Video
                </a>
            </div>
        </nav>

        {/* <!-- Video Grid --> */}
        <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
            <div
                className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
            >
                {/* <!-- single video --> */}
                <div
                    className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]"
                >
                    <div className="w-full flex flex-col">
                        <div className="relative">
                            <a href="video.html">
                                <img
                                    src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
                                    className="w-full h-auto"
                                    alt="Some video title"
                                />
                            </a>

                            <p
                                className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                            >
                                12:10
                            </p>
                        </div>

                        <div className="flex flex-row mt-2 gap-2">
                            <a href="#" className="shrink-0">
                                <img
                                    src="/assets/author.png"
                                    className="rounded-full h-6 w-6"
                                    alt="Learn with Sumit"
                                />
                            </a>

                            <div className="flex flex-col">
                                <a href="video.html">
                                    <p
                                        className="text-slate-900 text-sm font-semibold"
                                    >
                                        Video title
                                    </p>
                                </a>
                                <a
                                    className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                                    href="#"
                                >
                                    Learn with Sumit
                                </a>
                                <p className="text-gray-400 text-xs mt-1">
                                    200 views . May 3, 2022
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- error section */}
                    <div className="col-span-12">some error happened</div> 
                    {/* --> */}
            </div>
        </section>

        {/* <!-- footer --> */}
        <section className="pt-6">
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400"
            >
                <div>Copyright 2022 Learn with Sumit.</div>
                <div>
                    <a
                        href="https://youtube.com/learnwithsumit"
                        target="_blank"
                        rel="noreferrer"
                    >
                        YouTube Channel
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export const metadata = {
  title: "Redux Toolkit",
};
