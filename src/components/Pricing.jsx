import React from 'react'
import { GoDotFill } from 'react-icons/go';

const plans = [
    { name: "Free", price: "$0", features: ["Basic features", "Up to 3 projects"] },
    { name: "Pro", price: "$9/mo", features: ["Everything in Free", "Unlimited projects", "Reminders"] },
    { name: "Team", price: "$29/mo", features: ["Everything in Pro", "Team collaboration", "Priority support"] },
];

const Pricing = () => {
    return (
        <>
            <section className="py-16 text-center max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12">Pricing</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((p, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col">
                            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                            <p className="text-2xl font-bold mb-6">{p.price}</p>
                            <ul className="text-gray-600 mb-6">
                                {p.features.map((f, j) => (
                                    <li key={j} className="mb-3 flex justify-center items-center gap-1"><span><GoDotFill /></span> {f}</li>
                                ))}
                            </ul>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-[0.3s] mt-auto w-fit block mx-auto cursor-pointer">
                                Choose
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Pricing