import React from 'react'
import { useQuery } from '@tanstack/react-query'

const fetchUsers = async () => {
    const response = await fetch('https://reqres.in/api/users?page=2')
    return response.json()

}
export default function Users() {
    const { isLoading, error, data, status, isError, isSuccess } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    })
    // loading state
    if (isLoading) return <h1>loading...</h1>
    //error
    if (isError) return <h1>Error occured {error.message}</h1>
    console.log(data);

    return (
        <div>
            {data.data?.map((user) => {
                return (
                    <div>
                        <h1>
                            {user?.first_name} {user?.last_name}
                        </h1>
                        <p> Email: {user?.email}</p>
                        <img src={user?.avatar} />
                    </div>
                )
            })}
        </div>
    )
}
