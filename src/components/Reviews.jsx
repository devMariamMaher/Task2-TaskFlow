import React from 'react'

const reviews = [
    { name: "Sarah L.", text: "TaskFlow completely changed how I manage my day!" },
    { name: "John D.", text: "A simple yet powerful tool for keeping tasks organized." },
    { name: "Emma W.", text: "I love the reminders, they keep me on track." },
];

const Reviews = () => {
    return (
        <>
            <section className="py-16 bg-gray-100 text-center">
                <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                    {reviews.map((r, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                            <p className="italic mb-4">"{r.text}"</p>
                            <h4 className="font-semibold">{r.name}</h4>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Reviews