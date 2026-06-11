import React, { useState } from 'react'

function ChipsInput() {
    const [input, setInput] = useState("")
    const [chips, setChips] = useState([])
    const handleChips = () => {
        setChips(prev => [...prev, input])
        setInput("")
    }
    const handleRemove = (indexToRemove) => {
        setChips(prev => prev.filter((_, index) => index !== indexToRemove))
    }
    return (
        <div className='flex flex-col  items-center justify-center mt-10'>
            <h1 className='font-bold'>ChipsInput
            </h1>
            <div>
                <input
                    value={input}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleChips()
                        }
                    }}
                    onChange={(e) => setInput(e.target.value)}
                    className=' text-center mt-10 outline-blue-300 bg-gray-200 rounded-lg w-96 p-2' type="text"
                    placeholder="Type a chip and Press Tag" />
            </div>
            <div className='flex mt-10 text-white flex-wrap gap-10 items-center justify-center '>
                {chips.map((chip, index) => (
                    <span className='cursor-pointer bg-blue-400 p-3 rounded-lg' key={index}>
                        {chip}
                        <span onClick={() => handleRemove(index)} className="text-red-500 font-bold ml-4 p-2 rounded-lg">X</span>
                    </span>
                ))}
            </div>

        </div>
    )
}

export default ChipsInput