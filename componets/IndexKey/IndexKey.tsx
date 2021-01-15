import React from 'react'
import SearchButton from '../SearchButton'
import type { SearchButtonProps } from '../SearchButton'
import type { PostOverviewProps } from '../PostOverview'
import { useSearch } from '../../hooks/useSearch'

import styles from './IndexKey.module.scss'

type Props = {} & SearchButtonProps

const Component: React.FC<Props> = (props) => (
  <div className={styles.IndexKey}>
    <div className='w-container max-w-screen-xl mx-auto'>
      <p className='font-english text-xs md:text-sm'>My Notebook blog</p>
      <h1 className='text-2xl md:text-4xl font-bold'>
        でぃーすけの個人的備忘録
      </h1>
      <p className='text-xs md:text-sm leading-4 mt-2 md:mt-5'>
        このブログはweb制作会社の新卒エンジニアが
        <br className='md:hidden' />
        プライベートと仕事で得た知識を
        <br />
        忘れないようにするための備忘録です。
      </p>
      <div className='mt-14 md:mt-44 sm:w-3/5 md:w-3/4 lg:w-2/5 '>
        <SearchButton
          searchText={props.searchText}
          onChangeText={props.onChangeText}
          onSearch={props.onSearch}
        />
      </div>
    </div>
  </div>
)

const Container: React.FC = () => {
  const { searchText, handleChangeText, handleSearch } = useSearch()

  return (
    <Component
      searchText={searchText}
      onChangeText={handleChangeText}
      onSearch={handleSearch}
    />
  )
}

export default Container
