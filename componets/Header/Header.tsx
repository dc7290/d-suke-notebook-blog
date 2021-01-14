import React, { useState } from 'react'
import Link from 'next/link'
import { pagesPath } from '../../lib/$path'
import { useRouter } from 'next/dist/client/router'

type ContainerProps = {}
type Props = {
  open: boolean
  onToggle: () => void
  searchText: string
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearch: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <header className='fixed top-0 left-0 right-0 flex items-center justify-between h-14 pl-2.5 pr-6 border-gray border-b-2 border-solid'>
    <div className='flex items-center'>
      <img src='/logo.svg' alt='ロゴ' className='w-8 h-8' />
      <h1 className='text-xl'>でぃーすけの個人的備忘録</h1>
    </div>
    <button
      className='w-8 h-8 focus:outline-none sm:hidden'
      onClick={props.onToggle}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        className='stroke-current text-blue'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4 6h16M4 12h16m-7 6h7'
        />
      </svg>
    </button>
    <div
      className={
        'fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 transition-all' +
        (props.open ? ' visible opacity-100' : ' invisible opacity-0')
      }
      onClick={props.onToggle}
      role='button'
    ></div>
    <div
      className={
        'flex flex-col items-end absolute top-0 left-0 w-full px-6 pt-14 pb-12 bg-blue-light transition-transform transform' +
        (props.open ? ' translate-0' : ' -translate-y-full')
      }
    >
      <button
        className='absolute top-4 right-5 w-8 h-8 text-right focus:outline-none sm:hidden'
        onClick={props.onToggle}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          className='stroke-current text-blue'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
      <nav className='flex font-english font-normal pt-8'>
        <Link href={pagesPath.$url().pathname}>
          <a className='text-blue font-bold border-blue border-b-2 border-slid'>
            Home
          </a>
        </Link>
        <Link href={pagesPath.posts.$url().pathname}>
          <a className='pl-4'>Posts</a>
        </Link>
      </nav>
      <form id='search' className='flex w-full pt-6'>
        <input
          type='text'
          placeholder='Search Blog'
          className='text-xs w-2/3 p-2 rounded-l-md focus:outline-none focus:ring focus:border-blue placeholder-black-light'
          onChange={props.onChangeText}
        />
        <button
          form='search'
          className='w-1/3 text-xs text-white bg-gradient-to-b rounded-r-md from-blue-darker to-blue-dark'
          onClick={props.onSearch}
        >
          Search
        </button>
      </form>
    </div>
  </header>
)

const Container: React.FC<ContainerProps> = () => {
  const [open, setOpen] = useState(false)
  const handleToggle = () => setOpen(!open)

  const [searchText, setSearchText] = useState('')
  const handleChangeText: Props['onChangeText'] = (e) => {
    e.preventDefault()
    setSearchText(e.target.value)
  }
  const router = useRouter()
  const handleSearch: Props['onSearch'] = (e) => {
    e.preventDefault()
    handleToggle()
    router.push(`${pagesPath.search.$url().pathname}?q=${searchText}`)
  }

  return (
    <Component
      open={open}
      onToggle={handleToggle}
      searchText={searchText}
      onChangeText={handleChangeText}
      onSearch={handleSearch}
    />
  )
}

export default Container
