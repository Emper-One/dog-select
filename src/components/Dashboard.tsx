import { useEffect, useState } from "react"
import api from '../api/api'
import DogCard from "./DogCard"
import SelectBreeds from "./SelectBreeds"

function Dashboard() {
  const [dog, setDog] = useState('')
  const [imageDog, setImageDog] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getDog = async () => {
    try {
      setIsLoading(true)
      const { data: { message } } = await api.getSelectDog(dog)
      setImageDog(message)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { if (dog) getDog()}, [dog])

  const handleChange = async (item: string) => {
    setDog(item)
  } 

  

  return (
    <div className="container mx-auto h-[100%]">
      <SelectBreeds handleChange={handleChange} />
      <DogCard image={imageDog} dogName={dog} handleChange={getDog} loading={isLoading} />
    </div>
  )
}

export default Dashboard