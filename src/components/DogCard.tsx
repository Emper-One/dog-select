import { firstLetterUppercase } from "../utils/utils"
import { useEffect, useState } from "react"
import api from '../api/api'

interface Props {
  image: string
  dogName: string
  handleChange: () => void
  loading: boolean
}

function DogCard({image, dogName, handleChange, loading}: Props) {
  const [randomDog, setRandomDog] = useState(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  
  // Get get random dogs
  const getDogs = async () => {
    try {
      setIsLoading(true)
      const { data: { message } } = await api.getRandomDog()
      setRandomDog(message)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { getDogs() }, [])

  return (
    <div className="grid md:grid-cols-2 gap-4 m-1 text-center shadow-lg md:h-[500px] max-w-auto my-10 p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700">
      {image 
      ?<>
        <div>
          <img className="rounded md:h-[450px]" src={image} alt="dog image" />
        </div>
        <div className="h-full flex flex-col align-middle justify-center">
          <p className="text-white text-4xl font-bold">{firstLetterUppercase(dogName)}</p>
          <div>
            <button
              disabled={loading} 
              onClick={handleChange}
              type="button" 
              className="py-2.5 px-5 mr-2 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >Get new dog</button>
          </div>
        </div>  
      </>
      :<><div className="flex align-middle justify-center flex-col">
          <p className="text-white text-4xl font-bold">Select one dog!</p>
          <img className="rounded md:h-[400px]" src='/vite.svg' alt="dog image" />
        </div>
        <div className="flex align-middle justify-center flex-col">
          <p onClick={getDogs} className="text-white text-4xl font-bold hover:text-gray-500 cursor-pointer mb-2">{isLoading ? 'Loading...' : 'Random Dog'}</p>
          {randomDog && <div className="self-center"><img className="rounded md:h-[400px]" src={randomDog} alt="dog image" /></div>}
        </div>
      </>}
    </div>
  )
}

export default DogCard

