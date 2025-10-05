import { useState } from 'react'
import thumbnail1 from '../assets/images/1.png'
import thumbnail2 from '../assets/images/2.png'
import thumbnail3 from '../assets/images/3.png'
import thumbnail4 from '../assets/images/4.jpg'
import thumbnail5 from '../assets/images/5.jpg'
import map from '../assets/images/map.png'

export default function StyledTransition() {
    const [activeTab, setActiveTab] = useState('AMENITIES')
    const [selectedZone, setSelectedZone] = useState(null)
    const [sidebarOpen, setSidebarOpen] = useState(true)

    const zones = [{
        id: 0,
        title: 'Zoya Beach',
        subtitle: 'Beach',
        thumb: thumbnail1,
        description:
            "Zoya Beach is a popular spot for swimming, sunbathing, and relaxation. The beach is also a great place to visit if you want to see the sunset from the beach.",
    }, {
        id: 1,
        title: 'Zoya Lounge',
        subtitle: 'Lounge',
        thumb: thumbnail2,
        description:
            "Zoya Lounge is a lounge located in the heart of Zoya. It is a great place to relax, play, and have fun with friends.",
    }, {
        id: 2,
        title: 'Rituals of Zoya',
        subtitle: 'Rituals',
        thumb: thumbnail3,
        description:
            "Rituals of Zoya is a place where you can experience the rituals of Zoya. It is a great place to visit if you want to experience the rituals of Zoya.",
    }, {
        id: 3,
        title: 'Zoya Hotel',
        subtitle: 'Hotel',
        thumb: thumbnail4,
        description:
            "Zoya Hotel is a hotel located in the heart of Zoya. It is a great place to stay if you want to experience the city.",
    }, {
        id: 4,
        title: 'Zoya Playground',
        subtitle: 'Playground',
        thumb: thumbnail5,
        description:
            "Play at the beach.",
    }, {
        id: 5,
        title: 'Zoya Marina',
        subtitle: 'Marina',
        thumb: {},
        description:
            "Zoya Marina offers stunning views of the sea, luxury yachts, and a relaxing atmosphere. Perfect for evening walks or waterfront dining.",
    }, {
        id: 6,
        title: 'Zoya Garden',
        subtitle: 'Garden',
        thumb: {},
        description:
            "Zoya Garden is a peaceful green space filled with colorful flowers, walking paths, and cozy benches. Ideal for morning strolls or quiet reflection.",
    }, {
        id: 7,
        title: 'Zoya Market',
        subtitle: 'Market',
        thumb: {},
        description:
            "Zoya Market is the best place to shop for local crafts, fresh produce, and souvenirs. It’s lively, colorful, and full of character.",
    }, {
        id: 8,
        title: 'Zoya Spa',
        subtitle: 'Spa',
        thumb: {},
        description:
            "Zoya Spa offers massages, wellness treatments, and a serene atmosphere to help you unwind and rejuvenate after a long day.",
    }
    ]

    return (
        <div className="min-h-screen bg-[#2f2f2f] flex items-center justify-center p-6">
            <div className="w-full max-w-[1200px] rounded-3xl bg-[#3a3a3a] p-4 shadow-2xl overflow-hidden">
                {/* Top Tabs */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <button
                            // onClick={() => setSidebarOpen((s) => !s)}
                            className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"
                        >
                            {/* back/chev icon */}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setActiveTab('SURROUNDINGS')}
                            className={`px-4 py-2 rounded-full text-sm font-semibold ${activeTab === 'SURROUNDINGS' ? 'bg-white text-black' : 'text-white/80'
                                }`}
                        >
                            SURROUNDINGS
                        </button>
                        <button
                            onClick={() => setActiveTab('ZONES')}
                            className={`px-4 py-2 rounded-full text-sm font-semibold ${activeTab === 'ZONES' ? 'bg-white text-black' : 'text-white/80'
                                }`}
                        >
                            ZONES
                        </button>
                        <button
                            onClick={() => setActiveTab('AMENITIES')}
                            className={`px-4 py-2 rounded-full text-sm font-semibold ${activeTab === 'AMENITIES' ? 'bg-white text-black' : 'text-white/80'
                                }`}
                        >
                            AMENITIES
                        </button>
                    </div>


                </div>

                <div className="flex gap-4">
                    {/* Sidebar */}
                    <aside
                        className={`flex-shrink-0 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-14'
                            } overflow-hidden`}
                    >
                        <div className="h-full pr-2">
                            <div className="text-white font-semibold mb-4 px-3">Zoya Zones</div>

                            <div className="max-h-[calc(100vh-200px)] scrollbar-custom overflow-auto space-y-3 px-2 py-2">
                                {zones.map((z) => (
                                    <button
                                        key={z.id}
                                        onClick={() => setSelectedZone(z)}
                                        className={`w-full flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/7 transition ${selectedZone?.id === z.id ? 'bg-white/10' : ''
                                            }`}
                                    >
                                        <div className="w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-black/10">
                                            <img src={z.thumb} alt={z.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="text-left flex-1 hidden md:block">
                                            <div className="text-sm font-bold text-white">{z.title}</div>
                                            <div className="text-xs text-white/60">{z.subtitle}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* bottom button */}
                            {/* <div className="mt-6 px-3">
                                <button className="w-full py-2 rounded-full bg-white/6 text-white text-sm flex items-center justify-between px-4">
                                    <span>Zones</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div> */}
                        </div>
                    </aside>

                    {/* Main content area */}
                    <main className="flex-1 relative">
                        <div className="bg-[#bfaea0] rounded-2xl overflow-hidden shadow-inner">
                            <img
                                src={map}
                                alt="map"
                                className="w-full h-[620px] object-cover rounded-2xl"
                            />

                            {/* Example center marker */}
                            <div className="absolute left-1/2 top-28 -translate-x-1/2 flex flex-col items-center">
                                <div className="bg-[#3b82f6] px-4 py-2 rounded-full text-white font-semibold shadow-lg">SAND VIL</div>
                            </div>

                            {/* left floating chevron to collapse sidebar */}
                            <button
                                onClick={() => setSidebarOpen((s) => !s)}
                                className="absolute left-[-18px] top-48 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow"
                                aria-label="toggle sidebar"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 18L9 12L15 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {/* bottom info popup */}
                            {selectedZone && (
                                <div className="absolute left-1/2 bottom-6 -translate-x-1/2 w-[85%] max-w-[760px]">
                                    <div className="bg-black/70 backdrop-blur-sm text-white p-4 rounded-2xl shadow-2xl">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <div className="font-bold text-sm">{selectedZone.title}</div>
                                                <p className="text-xs text-white/80 mt-2">{selectedZone.description}</p>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={() => setSelectedZone(null)}
                                                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                                                >
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                                        <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
