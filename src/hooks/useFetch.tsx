 import React, { useEffect, useState } from 'react'
 
 const useFetch = (url: RequestInfo) => {
    
     const [data, setData] = useState<string>()
     const [error, setError] = useState<string>()
     const [isLoading, SetLoading] = useState<boolean>(true)

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
 