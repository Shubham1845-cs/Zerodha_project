import React from 'react'

function Team() {
    const teamMembers = [
        {
            name: 'Nithin Kamath',
            title: 'Founder, CEO',
            bio: 'Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.',
            img: 'https://zerodha.com/static/images/nithin-kamath.jpg'
        },
        {
            name: 'Nikhil Kamath',
            title: 'Co-founder & CFO',
            bio: 'Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.',
            img: 'https://zerodha.com/static/images/nikhil-kamath.jpg'
        },
        {
            name: 'Dr. Kailash Nadh',
            title: 'CTO',
            bio: 'Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products.',
            img: 'https://zerodha.com/static/images/kailash-nadh.jpg'
        },
        {
            name: 'Venu Madhav',
            title: 'COO',
            bio: 'Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations.',
            img: 'https://zerodha.com/static/images/venu-madhav.jpg'
        },
        {
            name: 'Hanan Delvi',
            title: 'CCO',
            bio: 'We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy.',
            img: 'https://zerodha.com/static/images/hanan.jpg'
        },
        {
            name: 'Karthik Rangappa',
            title: 'Chief of Education',
            bio: 'Karthik single-handedly wrote Varsity, Zerodha\'s massive educational program. He heads investor education initiatives at Zerodha.',
            img: 'https://zerodha.com/static/images/karthik.jpg'
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1140px] mx-auto px-4">
                <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">People</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            <div className="w-[200px] h-[200px] mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none'
                                    }}
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-sm text-gray-500 mb-3">{member.title}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team