import HamburgerButton from "./ui/HamburgerButton";
import SearchBar from "./ui/SearchBar";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-gray-100'>
        <div className='flex'>
            <HamburgerButton />
            <h1>Culture Terville</h1>
            
        </div>
        <div>
            <SearchBar />
        </div>
    </div>
  )
}

export default Navbar