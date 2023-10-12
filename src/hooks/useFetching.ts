import {useState} from "react"

export const useFetching = (callback: any) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    
    const fetching = async (...args: any[]) => {
      try {
          await callback(...args)
      } catch (e) {
        console.log(e)
      } finally {
          setIsLoading(false)
      }
    }

    return [fetching, isLoading]
}
