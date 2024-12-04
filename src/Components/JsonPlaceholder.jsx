import React from 'react'

const JsonPlaceholder = () => {
  return (
    <div className='px-[10.5rem] py-6 mt-14'>
      <div className=' text-[#374151] flex flex-col gap-6'>
        <h1 className='text-6xl font-normal mb-4'>Aftab Placeholder</h1>
        <h3 className='text-2xl'>Free fake and reliable API for testing and prototyping.</h3>
        <h3 className='text-2xl'>Powered by <span className='underline text-black'>JSON Server</span> + <span className='underline text-black'>LowDB</span>.</h3>
        <p className='font-bold'>Serving ~3 billion requests each month.</p>
      </div>
      <div>
        <h1 className='text-4xl font-normal mt-52 mb-7'>When to use</h1>
        <p>JSONPlaceholder is a free online REST API that you can use <span className='font-bold'>whenever you need some fake data</span>. It can be in a README on <br /> GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.</p>
      </div>
      <div>
        <h1 className='text-4xl font-normal mt-24 mb-7'>Resources</h1>
        <p className='mb-6'>JSONPlaceholder comes with a set of 6 common resources:</p>
        <div className='flex flex-col gap-2'>
          <a href="https://apis-using-express.vercel.app/posts" target='_blank' className='underline'>/posts</a>
          <a href="https://apis-using-express.vercel.app/comments" target='_blank' className='underline'>/comments</a>
          <a href="https://apis-using-express.vercel.app/albums" target='_blank' className='underline'>/albums</a>
          <a href="https://apis-using-express.vercel.app/photos" target='_blank' className='underline'>/photos</a>
          <a href="https://apis-using-express.vercel.app/todos" target='_blank' className='underline'>/todos</a>
          <a href="https://apis-using-express.vercel.app/users" target='_blank' className='underline'>/users</a>
        </div>
      </div>
    </div>
  )
}

export default JsonPlaceholder
