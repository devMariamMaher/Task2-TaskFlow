import React from 'react'

const Header = () => {
    return (
        <>
            <header className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <h1 className="text-4xl font-bold mb-4">TaskFlow</h1>
                <p className="text-lg mb-6">Organize your tasks, boost your productivity.</p>
                <button className="px-6 py-3 bg-white text-black rounded-full font-semibold shadow hover:bg-slate-200 transition-all duration-[0.3s] cursor-pointer">
                    Get Started
                </button>
            </header>
        </>
    )
}

export default Header