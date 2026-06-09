import React, { useEffect, useRef, useState } from 'react'

function Multideropsown() {
    const options = [
        { id: 1, label: "option 1", value: "option 1" },
        { id: 2, label: "option 2", value: "option 2" },
        { id: 3, label: "option 3", value: "option 3" },
        { id: 4, label: "option 4", value: "option 4" },
        { id: 5, label: "option 5", value: "option 5" },
        { id: 6, label: "option 6", value: "option 6" },
    ]
    const [isOpen, setIsOpen] = useState(false)
    const [selectedValues, setSelectedValues] = useState([])
    const dropdownRef = useRef(null)
    const searchRef = useRef()
    // const handleClick = (item) => {
    //     setSelectedValues(...prev, [prev, item])

    // }
    const handleOptions = (option) => {
        setSelectedValues((prev) => {
            const exists = prev.find((item) => item.id === option.id)

            if (exists) {

                return prev.filter((item) => item.id !== option.id)
            } else {

                return [...prev, option]
            }
        })
    }
    useEffect(() => {
        if (isOpen && searchRef.current) {
            searchRef.current.focus()
        }
    }, [isOpen])
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }

        }
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])
    return (
        <div className='flex flex-col cursor-pointer  items-center justify-center mt-10'>
            <div className='wrapper ' ref={dropdownRef}>
                <div>
                    <div className='bg-gray-300 flex justify-between p-2 w-96 text-center' onClick={() => setIsOpen(!isOpen)}>
                        <span>--SELECT--</span>
                        <span>{isOpen ? "▲" : "▼"}</span>
                    </div>
                </div>

                <div>
                    {selectedValues.map((value) => (
                        <span className=' rounded-lg text-white bg-blue-600 m-1 px-2'>{value.label}</span>
                    ))}
                </div>
                {isOpen && <div className='flex flex-col '>
                    <div>
                        <input ref={searchRef} className='mt-5 bg-gray-200 w-full' type="text" placeholder='Search ' />
                    </div>
                    {options.map((option) => (
                        <li key={option.id} className='list-none m-2'>
                            <input type="checkbox" onClick={() => handleOptions(option)} />
                            <label>{option.value}</label>
                        </li>
                    ))}
                </div>}

            </div>

        </div>
    )
}

export default Multideropsown