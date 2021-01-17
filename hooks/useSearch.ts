import { useState } from 'react'
import { useRouter } from 'next/router'
import type { SearchButtonProps } from '../components/SearchButton'
import { pagesPath } from '../lib/$path'

const useSearch = (func?: () => void) => {
  const [searchText, setSearchText] = useState('')
  const handleChangeText: SearchButtonProps['onChangeText'] = (e) => {
    e.preventDefault()
    setSearchText(e.target.value)
  }
  const router = useRouter()
  const handleSearch: SearchButtonProps['onSearch'] = (e) => {
    e.preventDefault()
    if (func) func()
    router.push(`${pagesPath.search.$url().pathname}?q=${searchText}`)
  }

  return {
    searchText,
    handleChangeText,
    handleSearch,
  }
}

export { useSearch }
