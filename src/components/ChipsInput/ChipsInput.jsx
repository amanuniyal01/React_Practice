import React, { useState } from 'react'

function ChipsInput() {
    const [input, setInput] = useState("")
    const [chips, setChips] = useState([])
    const [search, setSearch] = useState("")

    const handleChips = () => {
        const trimmed = input.trim()

        if (!trimmed || chips.includes(trimmed)) return

        setChips(prev => [...prev, trimmed])
        setInput("")

    }

    const handleRemove = (indexToRemove) => {
        setChips(prev => prev.filter((_, index) => index !== indexToRemove))
    }

    const filteredChips = chips.filter((chip) =>
        chip.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <h1 className='font-bold'>ChipsInput</h1>

            <div>
                <input
                    value={input}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault()
                            handleChips()
                        }
                    }}
                    onChange={(e) => setInput(e.target.value)}
                    className='text-center mt-10 outline-blue-300 bg-gray-200 rounded-lg w-96 p-2'
                    type="text"
                    placeholder="Type a chip and press Enter"
                />

                {chips.length > 0 && (
                    <span
                        onClick={() => setChips([])}
                        className='bg-red-400 cursor-pointer p-2 rounded-lg ml-2'
                    >
                        Clear all
                    </span>
                )}
            </div>

            {chips.length > 0 && (
                <div>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='text-center mt-10 outline-blue-300 bg-gray-200 rounded-lg w-96 p-2'
                        type="text"
                        placeholder='Search for chip'
                    />
                </div>
            )}


            <div className='flex mt-10 w-dvw text-white flex-wrap gap-4 items-center justify-center'>

                {filteredChips.length > 0 ? (
                    filteredChips.map((chip, index) => (
                        <span
                            key={index}
                            className='cursor-pointer bg-blue-400 p-3 rounded-lg flex items-center'
                        >
                            {chip}
                            <span
                                onClick={() => handleRemove(index)}
                                className="text-red-500 font-bold ml-3"
                            >
                                X
                            </span>
                        </span>
                    ))
                ) : (
                    search.trim() && (
                        <p className="text-red-500 font-semibold">
                            No results Found
                        </p>
                    )
                )}

            </div>
        </div>
    )
}

export default ChipsInput