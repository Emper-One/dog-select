import { useEffect, useState } from "react"
import api from '../api/api'
import DogCard from "./DogCard"
import SelectBreeds from "./SelectBreeds"
import { useFetching } from "../hooks/useFetching"

function Dashboard() {
  const [dog, setDog] = useState('')
  const [imageDog, setImageDog] = useState('')

  const [getDog, isLoadingDog] = useFetching(async() => {
    const { data: { message } } = await api.getSelectDog(dog)
    setImageDog(message)
  })

  useEffect(() => { if (dog) getDog() }, [dog])

  const handleChange = async (item: string) => {
    setDog(item)
  } 

  

  return (
    <div className="container mx-auto h-[100%]">
      <SelectBreeds handleChange={handleChange} />
      <DogCard image={imageDog} dogName={dog} handleChange={getDog} loading={isLoadingDog} />
    </div>
  )
}

export default Dashboard