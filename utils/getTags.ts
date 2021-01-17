import { options } from '../pages'

export const getTags = async () => {
  return fetch(`${process.env.MICROCMS_URL}tag`, options).then((res) =>
    res.json()
  )
}
