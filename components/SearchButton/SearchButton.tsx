import React from 'react'

export type ContainerProps = {
  searchText: string
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearch: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => void
}
type Props = {} & ContainerProps

const Component: React.FC<Props> = (props) => (
  <form id='search' className='flex' onSubmit={props.onSearch}>
    <input
      type='text'
      placeholder='Search Blog'
      value={props.searchText}
      className='text-xs w-2/3 p-2 md:p-3 shadow-md rounded-l-md focus:outline-none focus:ring focus:border-blue placeholder-black-light'
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
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
