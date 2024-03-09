import React from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/prandeepchoudhary')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      {data.name},  Github followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/prandeepChoudhary')
    return response.json()
}