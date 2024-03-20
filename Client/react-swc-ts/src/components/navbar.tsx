import { Button } from "./ui/button";
import menu from '../assets/menu.svg'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  

export default function Navbar(){

    const toggleMenu = () => {

    }

    return (

        <div id="heading" className='flex flex-row pe-4 sm:px-12 text-pink-400 backdrop-blur-sm bg-transparent font-extrabold  py-4 justify-between items-center w-100 h-[10vh]'>
        <div className='px-10'>
          <h1 className='font-hachi text-5xl'>Cutio</h1>
        </div>
        <div className='my-auto hidden sm:block'>
          <Button className='font-hachi bg-pink-400 hover:bg-pink-400 rounded-3xl mx-2 h-12 w-32 text-white hover:text-black  text-xl' variant="secondary">Sign-up</Button>
          <Button className='font-hachi bg-pink-400 hover:bg-pink-400 rounded-3xl mx-2 h-12 w-32 text-white hover:text-black text-xl' variant="secondary">Login</Button>
        </div>

        <div className="my-auto block sm:hidden">

        <Popover>
          <PopoverTrigger>
            <Button className='bg-pink-400 hover:bg-white rounded-2xl mx-2 h-12 w-20 text-white hover:text-black  text-lg relative z-20' onClick={toggleMenu}>
              <img src={menu} alt="" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="bg-dark border-0 flex flex-col justify-end items-end">
            <Button className='bg-pink-400 hover:bg-white my-2  rounded-3xl mx-2 h-12 w-32 text-white hover:text-black  text-lg' variant="secondary">Sign-up</Button>
            <Button className='bg-pink-400 hover:bg-white my-2  rounded-3xl mx-2 h-12 w-32 text-white hover:text-black text-lg' variant="secondary">Login</Button>
          </PopoverContent>
        </Popover>

      </div>

        </div>
    )
}