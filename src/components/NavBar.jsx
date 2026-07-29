

function NavBar() {

return (
  <nav className="fixed top-0 left-5 right-5 z-50 flex items-center justify-evenly">
    <div className="w-64 mt-2">
      <h2 className="text-white flex justify-center font-bold">WAVGS LOGO</h2>
    </div>
    <div className="relative z-10 rounded-lg bg-white/8 backdrop-blur-md border border-white/8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),_0_10px_15px_-3px_rgba(0,0,0,0.1)] flex flex-row justify-center w-[600px] mt-2">
      <a href="#" class="rounded-md my-2 px-8 py-2 text-white font-medium hover:bg-white/20">Home</a>
      <a href="#" class="rounded-md my-2 px-8 py-2 text-white font-medium hover:bg-white/20">Events</a>
      <a href="#" class="rounded-md my-2 px-8 py-2 text-white font-medium hover:bg-white/20">Community</a>
      <a href="#" class="rounded-md my-2 px-8 py-2 text-white font-medium hover:bg-white/20">About Us</a>
    </div>
    <div className="relative z-10 rounded-lg bg-white/8 backdrop-blur-md border border-white/8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),_0_10px_15px_-3px_rgba(0,0,0,0.1)] flex flex-row justify-center w-[200px] mt-2">
      <a href="#" class="rounded-md my-2 px-8 py-2 text-white font-medium hover:bg-white/20  hover:text-white">Join Us</a>
    </div>
  </nav>
)}

export default NavBar