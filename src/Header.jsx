export default function Header() {
  return (
    <div className='flex justify-around items-center py-4'>
      <div>
        <img className='w-20 h-20' src='/logo.svg' alt='logo' />
      </div>
      <nav className='space-x-4 flex gap-12 text-lg font-sans'>
        <a href='#' className='text-white'>
          Homes
        </a>
        <a href='#' className='text-white'>
          Cities
        </a>
        <a href='#' className='text-white'>
          Policy
        </a>
      </nav>
      <div className='space-x-8 text-lg'>
        <button>
          <a className='text-white' href='#'>
            Log in
          </a>
        </button>
        <button className='bg-white text-black px-4 py-2 rounded-full'>
          <a className='text-black' href='#'>
            Sign up
          </a>
        </button>
      </div>
    </div>
  );
}
