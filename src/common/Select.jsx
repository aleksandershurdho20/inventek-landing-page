import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import { services } from '../constants/services'

export default function Select({ multi, options, onChange, value }) {
    const [toogleSelect, setToogleSelect] = useState(false)
    const handleToogle = () => setToogleSelect(!toogleSelect)

    const handleListSelect = (value) => {
        onChange(value)
        handleToogle()
    }

    return (
        <>
            <div className='w-full flex justify-between px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors text-white cursor-pointer' onClick={handleToogle}>
                <h2>{value || "Ju lutem zgjidhni nje opsion"}</h2>

                <div className={`transition-transform duration-300 ${toogleSelect ? 'rotate-180' : ''}`}>
                    <ChevronDown className='cursor-pointer' />
                </div>
            </div>

            
            <div className={` w-full transition-all duration-300 ease-out ${
                toogleSelect 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}>
                {toogleSelect && 
                <ul className="mt-2 space-y-2">
                    {services.map(service => (
                        <li
                            key={service.title}
                            className={`list-none px-4 py-3 border ${
                                value === service.title ? "border-blue-400" : "border-gray-700"
                            } rounded-lg cursor-pointer transition-colors hover:bg-white/5`}
                            onClick={() => handleListSelect(service.title)}
                        >
                            {service.title}
                        </li>
                    ))}
                </ul>
                }
            </div>
        </>
    )
}