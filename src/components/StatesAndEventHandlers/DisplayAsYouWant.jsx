import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addText, Reset } from '../../utils/DisplaySlice'

function DisplayAsYouWant() {
    const [isTextShow, setIsTextShow] = useState(false)
    const dispatch = useDispatch()
    const input = useSelector((store) => store.display.input)
    const handleReset = () => {
        dispatch(Reset())
        setIsTextShow(false)
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setIsTextShow(true)
        }
        if (e.key === "Escape") {
            dispatch(Reset)
        }

    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">

                <label className="block text-lg font-semibold mb-2 text-gray-700">
                    Enter Text You Want to Display
                </label>

                <input
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    onChange={(e) => dispatch(addText((e.target.value)))}
                    value={input}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter the text"
                />

                <div className="flex justify-center gap-4 mt-4">
                    <button
                        onClick={() => setIsTextShow(true)}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                    >
                        show
                    </button>
                    <button
                        onClick={handleReset}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                    >
                        Reset
                    </button>

                    <button
                        onClick={() => dispatch(addText("Hello Example"))}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                    >
                        Example
                    </button>
                </div>

                {isTextShow && <p className="mt-6 text-xl font-medium text-gray-800 ">
                    {input || "Your text will appear here..."}
                </p>}

            </div>
        </div>
    )
}

export default DisplayAsYouWant