import { useEffect, useState, ReactElement } from "react"
import api from '../api/api'
import { firstLetterUppercase } from "../utils/utils"

type ChildProps = {
  handleChange: (e: string) => void
}

function SelectBreeds({handleChange}: ChildProps): ReactElement {
  const [dogs, setDogs] = useState({})
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // Get all dogs race
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

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    handleChange(value)
  }
  
  return (
    <div className="mr-1 ml-1 my-10">
      <label htmlFor="dogs" className="block mb-1 text-sm font-medium text-gray-900">Select an option</label>
      <select 
        disabled={isLoading} 
        id="dogs" 
        data-testid="dogs"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-100 dark:focus:border-gray-100"
        onChange={selectChange}
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