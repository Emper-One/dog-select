import { useEffect, useState } from "react"
import api from '../api/api'
import { firstLetterUppercase } from "../utils/utils"

interface Func {
  handleChange: () => void
}

function SelectBreeds({handleChange}: Func) {
  const [dogs, setDogs] = useState({})
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const getDogs = async () => {
      try {
        setIsLoading(true)
        const { data: { message } } = await api.getAllDogs()
        setDogs(message)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    getDogs() 
  }, [])

  return (
    <div className="mr-1 ml-1 my-10">
      <label htmlFor="dogs" className="block mb-1 text-sm font-medium text-gray-900">Select an option</label>
      <select 
        disabled={isLoading} 
        id="dogs" 
        data-testid="dogs"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-100 dark:focus:border-gray-100"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value=''>Choose a dog</option>
        {Object.keys(dogs).map((item, index) => {
          return (
            <option key={index} value={item}>{firstLetterUppercase(item)}</option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectBreeds