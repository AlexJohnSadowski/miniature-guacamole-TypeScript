 import React, { useEffect, useState, useCallback } from 'react'


type useFetchType = <T extends {}>() => {
    data: T;
    isLoading: boolean;
    hasError: Boolean;
}

 const useFetch = <T extends {}>(url: string) => {
    
     const [data, setData] = useState<T | null>(null)
     const [error, setError] = useState('')
     const [isLoading, SetLoading] = useState(false)

     const c = () => {
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data =>{
            setData(data)
            SetLoading(false)

        })
     }

     useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data =>{
            setData(data)
            SetLoading(false)

        })
     }, [url])

     return {data, error, isLoading}
 }
 
 export default useFetch
 