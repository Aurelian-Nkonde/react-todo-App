// import Card from "./card"

const Content = ({developers, deleteDeveloper}) => {
    return(
        <div className="px-10 mx-auto">
            <h1 className="font-sans font-bold tracking-wider text-gray-600 text-3xl text-center capitalize py-3">list of devs</h1>
            {developers.map((developer, index) => {
                return (
                    <div key={index}>
                       <div className="bg-blue-100 border-l-8 border-yellow-900 p-10 max-w-4xl mx-auto block  sm:flex justify-between items-center mb-4">
                            <div className="flex flex-col pb-5">
                                <span><h1 className="font-sans-serif text-gray-600 text-2xl mb-1">{developer.name}</h1></span>
                                <span><p className="font-sans-serif text-gray-500 text-1xl">{developer.email}</p></span>
                            </div>
                            <div className="flex">
                                <a href="#" className="bg-gray-800 hover:bg-gray-700 py-2 px-6 mr-5 text-gray-100 capitalize">edit</a>
                                <button
                                    onClick={() => deleteDeveloper(index)}
                                    className="bg-red-500  hover:bg-red-400 py-2 px-6 mr-5 text-gray-100 capitalize"
                                    >
                                    delete
                                </button>
                            </div>
                        </div> 
                    </div>
                )
            })}
        </div>
    )
}

export default Content

