export default function Mains() {
  return (
    <div className='flex flex-col items-center gap-2 mt-20 bg-opacity-50 text-white p-4 rounded-lg font-sans'>
      <div>
        <p>WE HAVE AN OFFER FOR YOU!</p>
      </div>
      <div className='font-normal rounded-full  border-2 divide-gray-50 shadow-lg  p-12 backdrop-blur-sm'>
        <h1 className='text-8xl  mb-2'>A dream residence</h1>
        <h2 className='text-8xl '>
          at our <span className='text-green-400'>jungle house.</span>
        </h2>
      </div>
    </div>
  );
}
