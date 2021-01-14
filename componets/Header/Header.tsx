import React, { useState } from 'react'
import Link from 'next/link'
import SearchButton from '../SearchButton'
import { pagesPath } from '../../lib/$path'
import type { SearchButtonProps } from '../SearchButton'
import { useSearch } from '../../hooks/useSearch'

type ContainerProps = {}
type Props = {
  open: boolean
  onToggle: () => void
} & ContainerProps &
  SearchButtonProps

const Navigation: React.FC = () => (
  <nav className='flex font-english font-normal'>
    <Link href={pagesPath.$url().pathname}>
      <a className='relative text-blue font-bold'>
        Home
        <span className='absolute bottom-0 left-0 bg-blue w-over-5 h-0.5'></span>
      </a>
    </Link>
    <Link href={pagesPath.posts.$url().pathname}>
      <a className='pl-5'>Posts</a>
    </Link>
  </nav>
)

const Component: React.FC<Props> = (props) => (
  <header className='fixed z-40 top-0 left-0 right-0 flex items-center justify-between h-14 md:h-20 pl-2.5 md:pl-5 pr-6 md:pr-8 bg-white border-gray border-b-2 border-solid'>
    <div className='flex items-center'>
      <img src='/logo.svg' alt='ロゴ' className='w-10 h-10' />
      <h1 className='text-xl md:text-2xl'>でぃーすけの個人的備忘録</h1>
    </div>
    <div className='hidden md:flex items-center'>
      <Navigation />
      <div className='w-60 ml-7'>
        <SearchButton
          searchText={props.searchText}
          onChangeText={props.onChangeText}
          onSearch={props.onSearch}
        />
      </div>
    </div>
    <button
      className='w-8 h-8 focus:outline-none md:hidden'
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
        className='absolute top-4 right-5 w-8 h-8 text-right focus:outline-none'
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
      <div className='mt-8'>
        <Navigation />
      </div>
      <div className='mt-6 w-full'>
        <SearchButton
          searchText={props.searchText}
          onChangeText={props.onChangeText}
          onSearch={props.onSearch}
        />
      </div>
    </div>
  </header>
)

const Container: React.FC<ContainerProps> = () => {
  const [open, setOpen] = useState(false)
  const handleToggle = () => setOpen(!open)

  const { searchText, handleChangeText, handleSearch } = useSearch(handleToggle)
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
