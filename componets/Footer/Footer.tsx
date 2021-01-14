const Component = () => (
  <>
    <footer className='font-english mt-24 py-7 bg-blue-lighter bg-opacity-10'>
      <p className='font-bold text-center'>MEDIA</p>
      <ul className='flex gap-5 justify-center mt-2'>
        <li className='text-xs'>
          <a href='https://github.com/dc7290' target='_blank' rel='noopener'>
            Github
          </a>
        </li>
        <li className='text-xs'>
          <a
            href='https://twitter.com/d_suke_09'
            target='_blank'
            rel='noopener'
          >
            Twitter
          </a>
        </li>
      </ul>
    </footer>
  </>
)

const Container = () => {
  return <Component />
}

export default Container
