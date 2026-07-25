import { useMemo, useState } from "react"

const mockData = [
    {
        id: 1, label: "Aman"
    }, {
        id: 2, label: "Uniyal"
    },
    {
        id: 3, label: "Interview"
    },
    {
        id: 4, label: "Practice"
    }
]

export const PracticeQuestion = () => {

    const [input, setInput] = useState("")
    const [count, setcount] = useState(0)
    const [data, setData] = useState(mockData)
    // const showCaptial = () => {
    //     setInput(input.toUpperCase())
    // }
    const removeThisItem = (id) => {
        setData((prev) => (prev.filter((item) => item.id !== id)))
        console.log("data", data)
    }
    const filtereOptions = useMemo(() => data.filter((val) => val.label.toLowerCase().includes(input.toLowerCase())), [input, data])
    console.log("filterValue", filtereOptions)
    return (
        <div className="mt-48 ml-56">
            <input
                className="bg-amber-200"
                value={input}
                onChange={(e) => {
                    const value = e.target.value
                    console.log("value", value)
                    setInput(value)

                }}

                placeholder="Enter the text"
            />
            <p>
                Here is my text :{input}
            </p>
            <p>My word count is :{input.length}</p>
            {filtereOptions.length > 0 ? filtereOptions?.map((item, index) => {
                return <ul>
                    <li key={data.id}>
                        {item.label}
                        <button className="bg-red-600 text-white" onClick={() => {
                            console.log("Clicked")
                            removeThisItem(item.id)
                            console.log("id", item.id)
                        }}>
                            Remove
                        </button>
                    </li>
                </ul>
            }) : <p className="text-red-700">
                heyy !! No data found
            </p>}
        </div>
    )
}