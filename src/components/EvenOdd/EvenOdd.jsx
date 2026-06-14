import React, { useState } from 'react'

function EvenOrOddChecker() {
    const [searchQuery, setSearchQuery] = useState("")
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)

    const checkEvenOdd = () => {
        setResult(null);
        setLoading(true);

        setTimeout(() => {
            const parsed = parseInt(searchQuery, 10);

            if (isNaN(parsed)) {
                setResult("Please Enter a valid number")
            } else {
                setResult(
                    `The number ${parsed} is ${parsed % 2 === 0 ? "even" : "odd"}`
                )
            }

            setLoading(false)
        }, 1000)
    }

    return (
        <div className="even-odd-container">
            <h1 className="title">Even or Odd Checker</h1>

            <input
                className="number-input"
                type="text"
                value={searchQuery}
                placeholder="Enter a number"
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="number-input"
            />

            <button
                onClick={checkEvenOdd}
                className="check-button"
                data-testid="check-button"
            >
                Check
            </button>

            <div className="result-area">
                {loading && (
                    <div data-testid="loading" className="loading">Checking...</div>
                )}

                {!loading && result && (
                    <div className="result" data-testid="result">
                        {result}
                    </div>
                )}
            </div>
        </div>
    );
}

export default EvenOrOddChecker;
