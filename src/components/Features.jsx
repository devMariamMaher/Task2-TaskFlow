import React from 'react'
import { FiBell, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const features = [
    { icon: <FiCheckCircle className="text-blue-600 text-5xl mb-4 mx-auto" />, title: "Easy to Use", desc: "Simple interface to manage your tasks efficiently." },
    { icon: <FiCalendar className="text-blue-600 text-5xl mb-4 mx-auto" />, title: "Smart Scheduling", desc: "Plan your days and never miss a deadline." },
    { icon: <FiBell className="text-blue-600 text-5xl mb-4 mx-auto" />, title: "Reminders", desc: "Get notified about important tasks." },
];

const Features = () => {
    return (
        <>
            <section className="py-16 max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12">Features</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                            <span className="text-5xl mb-4 mx-auto">{f.icon}</span>
                            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                            <p className="text-gray-600">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Features