'use client'

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/userRegisterModal";

const UserMenu = () => {

    const [open,setOpen] = useState(false)
    const toggleOpen = useCallback(()=>{
        setOpen((value)=>!value)
    },[])

    const registerModal = useRegisterModal()

  return (
    <div className="relative ">
        <div className="flex flex-row items-center gap-3">
            <div onClick={()=>{}} className="hidden md:block text-sm font-semibold py-3 px-4  rounded-full hover:bg-neutral-100 transition cursor-pointer">
                Airbnb your home
            </div>
            <div onClick={toggleOpen} className="p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition" >
             <AiOutlineMenu />
             <div className="hidden md:block">
                <Avatar/>
          </div>
            </div>
        </div>

        {
            open && (
                <div className="absolute rounded-xl shadow-sm w-[40vm] md:w-3/4 bg-white overflow-x-hidden right-0 top-12 text-sm">
                    <div className="flex cursor-pointer flex-col">
                        <>
                            <MenuItem label="Login" onClick={()=>{}} />
                            <MenuItem label="Sign up" onClick={registerModal.onOpen} />
                        </>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default UserMenu