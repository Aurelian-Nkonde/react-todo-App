const Logo = ({logo}) => {
    return(
        <div>
            <h1 className="text-green-900 font-sans font-bold text-3xl capitalize tracking-wider">{logo}</h1>
        </div>
    )
}

const Links = () => {
    return(
        <div>
            <ul className="flex">
                <li className="text-green-700 font-sans-serif text-lg mr-7 font-bold tracking-wide">Home</li>
                <li className="text-green-700 font-sans-serif text-lg mr-7 font-bold tracking-wide">About</li>
                <li className="text-green-700 font-sans-serif text-lg mr-4 font-bold tracking-wide">Gallery</li>
            </ul>
        </div>
    )
}

const Header = ({logo}) => {
    return(
        <div className="bg-green-300 p-5">
            <div className="container mx-auto flex justify-around items-center">
                <Logo logo={logo}/>
                <Links />
            </div>
        </div>
    )
}



export default Header