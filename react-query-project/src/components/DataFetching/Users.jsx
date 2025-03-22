import React from 'react'
import { useQuery } from '@tanstack/react-query'

const fetchUsers = async (userId) => {
    const response = await fetch(`https://reqres.in/api/users/${userId}`)
    if(!response.ok){
        throw new Error("User Not Found")
    }
    return response.json()

}
export default function User() {
    const userId = 5 //hard coded
    const { isLoading, error, data, status, isError, isSuccess } = useQuery({
        queryKey: ['users', userId],
        queryFn: () => fetchUsers(userId),
    })
    // loading state
    if (isLoading) return <h1>loading...</h1>
    //error
    if (isError) return <h1>Error occured {error.message}</h1>
    console.log(data);

    return (
        <>
            <div>
                <h1>User Details</h1>
                <h1>
                {data.data?.first_name} {data.data?.last_name}
            </h1>
            <p> Email: {data.data?.email}</p><img src={data.data?.avatar} />
        </div >
        </>
    )
}
