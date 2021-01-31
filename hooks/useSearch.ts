import { useState } from 'react'
import { useRouter } from 'next/router'
import type { SearchButtonProps } from '../components/SearchButton'
import { pagesPath } from '../utils/$path'
import * as gtag from 'utils/gtag'

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

    gtag.event({
      action: 'Search',
      category: 'Other',
      label: 'Keyword of the Search',
      value: searchText,
    })

    router.push(`${pagesPath.search.$url().pathname}?q=${searchText}`)
  }

  return {
    searchText,
    handleChangeText,
    handleSearch,
  }
}

export { useSearch }
