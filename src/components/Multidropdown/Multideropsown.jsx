import React, { useEffect, useRef, useState, useMemo } from 'react'

const options = [
    { id: 1, label: "Option 1", value: "option 1" },
    { id: 2, label: "Option 2", value: "option 2" },
    { id: 3, label: "Option 3", value: "option 3" },
    { id: 4, label: "Option 4", value: "option 4" },
    { id: 5, label: "Option 5", value: "option 5" },
    { id: 6, label: "Option 6", value: "option 6" },
]

function Multidropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedValues, setSelectedValues] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const dropdownRef = useRef(null)
    const searchRef = useRef()

    const filteredOptions = useMemo(() =>
        options.filter((option) =>
            option.label.toLowerCase().includes(searchTerm.toLowerCase())
        ), [searchTerm])

    const isAllSelected = selectedValues.length === options.length

    const handleOptions = (option) => {
        setSelectedValues((prev) => {
            const exists = prev.find((item) => item.id === option.id)
            return exists
                ? prev.filter((item) => item.id !== option.id)
                : [...prev, option]
        })
    }

    const handleSelectAll = () => {
        setSelectedValues(isAllSelected ? [] : options)
    }

    const handleClear = (value) => {
        setSelectedValues((prev) => prev.filter((opt) => opt.id !== value.id))
    }

    useEffect(() => {
        if (isOpen && searchRef.current) searchRef.current.focus()
        if (!isOpen) setSearchTerm("")
    }, [isOpen])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div className="min-h-screen bg-gray-50 flex items-start justify-center pt-16 px-4">
            <div className="w-full max-w-sm" ref={dropdownRef}>


                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                    Select Options
                </label>


                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg border bg-white text-sm font-medium transition-all
                        ${isOpen
                            ? 'border-blue-500 ring-2 ring-blue-100 text-gray-800'
                            : 'border-gray-300 text-gray-500 hover:border-gray-400'
                        }`}
                >
                    <span>
                        {selectedValues.length > 0
                            ? `${selectedValues.length} item${selectedValues.length > 1 ? 's' : ''} selected`
                            : 'Select...'}
                    </span>
                    <div className="flex items-center gap-2">
                        {selectedValues.length > 0 && (
                            <span
                                role="button"
                                tabIndex={0}
                                onClick={(e) => { e.stopPropagation(); setSelectedValues([]) }}
                                onKeyDown={(e) => e.key === 'Enter' && setSelectedValues([])}
                                className="text-xs text-red-400 hover:text-red-600 font-normal transition-colors"
                            >
                                Clear all
                            </span>
                        )}
                        <svg
                            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </button>


                {selectedValues.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                        {selectedValues.map((v) => (
                            <span
                                key={v.id}
                                className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-medium px-2.5 py-1 rounded-full"
                            >
                                {v.label}
                                <button
                                    onClick={() => handleClear(v)}
                                    className="text-blue-400 hover:text-blue-700 transition-colors leading-none"
                                    aria-label={`Remove ${v.label}`}
                                >
                                    ×
                                </button>
                            </span>
                        ))}
                    </div>
                )}


                {isOpen && (
                    <div className="mt-1.5 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-20">


                        <div className="px-3 pt-3 pb-2">
                            <div className="relative">
                                <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                                </svg>
                                <input
                                    ref={searchRef}
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search..."
                                    className="w-full pl-8 pr-3 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition"
                                />
                            </div>
                        </div>


                        <div
                            onClick={handleSelectAll}
                            className="flex items-center gap-2.5 px-3 py-2 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                checked={isAllSelected}
                                onChange={handleSelectAll}
                                className="w-4 h-4 accent-blue-600 cursor-pointer"
                            />
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                Select All
                            </span>
                        </div>

                        <ul className="max-h-44 overflow-y-auto divide-y divide-gray-50">
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option) => {
                                    const checked = selectedValues.some((item) => item.id === option.id)
                                    return (
                                        <li
                                            key={option.id}
                                            className={`flex items-center gap-2.5 px-3 py-2.5 cursor-pointer transition-colors
    ${checked ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-gray-50'}`}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={checked}
                                                onChange={() => handleOptions(option)}
                                                className="w-4 h-4 accent-blue-600 cursor-pointer"
                                            />
                                            <label className="text-sm text-gray-700 cursor-pointer">
                                                {option.label}
                                            </label>
                                        </li>
                                    )
                                })
                            ) : (
                                <li className="px-3 py-4 text-sm text-center text-gray-400">
                                    No results for "{searchTerm}"
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Multidropdown
