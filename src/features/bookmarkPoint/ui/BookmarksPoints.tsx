import { useEffect, useState } from "react"
import { getAllBookmarks } from "../api/bookmarksApi"
import { Point } from "@/entities/point/model/types"

export const BookmarksPoint = () => {
    const [bookmarks, setBookmarks] = useState<Point[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchBookmarks = async () => {
            setIsLoading(true)
            const data = await getAllBookmarks()
            setBookmarks(data)
            setIsLoading(false)
        }

        fetchBookmarks()
    }, [])
    return (
        <>
            bookmarks
            {isLoading ? <h1>Loading...</h1> : ""}

            {
                bookmarks?.map((bookmark) => (
                    <p>{bookmark.streetName}</p>
                ))
            }
        </>
    )
}