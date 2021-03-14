import React, { useState } from 'react'
import Link from 'next/link'
import SearchButton from '../SearchButton'
import { pagesPath } from '../../utils/$path'
import type { SearchButtonProps } from '../SearchButton'
import { useSearch } from '../../hooks/useSearch'
import { useRouter } from 'next/router'

import stylesNavigation from './Navigation.module.scss'

type NavigationProps = {
  onLinkClick: () => void
  currentPass: string
}
type ContainerProps = {}
type Props = {
  open: boolean
  onToggle: () => void
} & ContainerProps &
  SearchButtonProps &
  NavigationProps

const navigationList = [
  {
    pass: pagesPath.$url().pathname,
    name: 'Home',
  },
  {
    pass: pagesPath.posts.$url().pathname,
    name: 'Posts',
  },
]
const Navigation: React.FC<NavigationProps> = (props) => (
  <nav className='flex font-english font-normal'>
    {navigationList.map((nav) => {
      const isMatch = props.currentPass === nav.pass
      return (
        <Link href={nav.pass} key={nav.name}>
          <a
            className={`${stylesNavigation.link} ${
              isMatch ? stylesNavigation.active : ''
            }`}
            onClick={() => props.onLinkClick()}
          >
            {nav.name}
          </a>
        </Link>
      )
    })}
  </nav>
)

const Component: React.FC<Props> = (props) => (
  <header className='fixed z-40 top-0 left-0 right-0 flex items-center justify-between h-14 md:h-20 pl-2.5 md:pl-5 pr-6 md:pr-8 bg-white border-gray border-b-2 border-solid'>
    <div className='flex items-center'>
      <Link href={pagesPath.$url()}>
        <a>
          <img src='/logo.svg' alt='ロゴ' className='w-10 h-10' />
        </a>
      </Link>
      <h1 className='text-xl md:text-2xl'>でぃーすけの個人的備忘録</h1>
    </div>
    <div className='hidden md:flex items-center'>
      <Navigation
        onLinkClick={props.onLinkClick}
        currentPass={props.currentPass}
      />
      <div className='w-60 lg:w-80 ml-7'>
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
        <Navigation
          onLinkClick={props.onLinkClick}
          currentPass={props.currentPass}
        />
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

  const { searchText, handleChangeText, handleSearch } = useSearch(() =>
    setOpen(false)
  )

  const router = useRouter()

  const handleLinkClick = () => {
    setOpen(false)
  }
  return (
    <Component
      open={open}
      onToggle={handleToggle}
      searchText={searchText}
      onChangeText={handleChangeText}
      onSearch={handleSearch}
      onLinkClick={handleLinkClick}
      currentPass={router.pathname}
    />
  )
}

export default Container
