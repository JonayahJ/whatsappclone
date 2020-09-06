import { useEffect, useState } from 'react'

// save the localstorage key to this prefix so you don't get mixed up with other storage files
const PREFIX = "WhatsApp-Clone-"

export default function useLocalStorage(key, initialValue) {
  // create the full prefixed key but combining PREFIX + key
  const prefixedKey = PREFIX + key
  // parsing JSON from useState is really slow, so we only want to do it once. Therefore, we have to use the useState fx to set the id to the value
  const [value, setValue] = useState(() => {
    // we want the json value of the value of the prefixedkey
    const jsonValue = localStorage.getItem(prefixedKey)
    // if there is a value and it's not null, parse and return the value as a default value
    if (jsonValue != null) return JSON.parse(jsonValue)
    // if thhat's not the case, check the typeof the initialValue, and if it is a fx, return the fx by invoking it, otherwise return the default value
    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  })

  // save our value into localStorage
  // anytime the value or key changes, we need to resave the value
  useEffect(() => {
    // take the value and stringify it iot save it into the localStorage value
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}