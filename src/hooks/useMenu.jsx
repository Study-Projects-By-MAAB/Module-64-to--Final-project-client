// import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

const useMenu = () => {
    const axiosPublic = useAxiosPublic()
    // const [menu, setMenu] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     setLoading(true)
    //     fetch("https://bistro-boss-server-opal-alpha.vercel.app/menu")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setMenu(data)
    //             setLoading(false)
    //             console.log(data)
    //             // const popularItems = data.filter((item) => item.category === "popular")
    //             // setMenu(popularItems)
    //         })
    // }, [])

    const {
        data: menu = [],
        isPending: loading,
        refetch,
    } = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const res = await axiosPublic.get("/menu")
            return res.data
        },
    })

    return [menu, loading, refetch]
}

export default useMenu
