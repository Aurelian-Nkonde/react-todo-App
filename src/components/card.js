const Card = ({developer, deleteDeveloper}) => {
    return(
            <div className="bg-blue-100 border-l-8 border-yellow-900 p-10 max-w-4xl mx-auto flex justify-between items-center mb-4">
                <div className="flex flex-col ">
                    <span><h1 className="font-sans-serif text-gray-600 text-2xl mb-1">{developer.name}</h1></span>
                    <span><p className="font-sans-serif text-gray-500 text-1xl">{developer.email}</p></span>
                </div>
                <div className="flex">
                    <a href="#" className="bg-gray-800 hover:bg-gray-700 py-2 px-6 mr-5 text-gray-100 capitalize">edit</a>
                    <button
                        onClick={() => deleteDeveloper(index)}
                        className="bg-red-500 hover:bg-red-400 py-2 px-6 mr-5 text-gray-100 capitalize"
                        >
                        delete
                    </button>
                </div>
            </div> 
    )
}

export default Card