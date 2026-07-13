import React from "react"

function NavBar() {

return (
  <nav className="flex items-center justify-evenly">
    <div className="border-2 w-64">

    </div>
    <div className="flex flex-row justify-center bg-black-300 border-2 w-200">
      <a href="#" class="rounded-md my-2 px-8 py-2 text-white font-medium hover:bg-white/10 hover:text-white">Home</a>
      <a href="#" class="rounded-md my-2 px-8 py-2 text-white font-medium hover:bg-white/10 hover:text-white">Events</a>
      <a href="#" class="rounded-md my-2 px-8 py-2 text-white font-medium hover:bg-white/10 hover:text-white">Community</a>
      <a href="#" class="rounded-md my-2 px-8 py-2 text-white font-medium hover:bg-white/10 hover:text-white">About Us</a>
    </div>
    <div className="flex flex-row justify-center border-2 w-64">
      <a href="#" class="rounded-md my-2 px-8 py-2 text-white font-medium hover:bg-white/10 hover:text-white">Join Us</a>
    </div>
  </nav>
)}

export default NavBar