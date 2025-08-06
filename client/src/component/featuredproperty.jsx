import React from 'react'
import fp from '../assets/fp1.jpg'
import fp2 from '../assets/fp2.jpg'
import fp3 from '../assets/fp3.jpg'
import fp4 from '../assets/fp4.jpg'
import icon from '../assets/icon.png'

const Featuredproperty = () => {
    return (
        <>
            <div className='bg-lime-50 mt-10 mx-4 my-4 rounded-lg shadow-lg z-10 px-6 py-10'>
                <p className="text-4xl font-serif mt-2 text-center mb-8">Explore Our Property</p>
                <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
                    <div className='flex flex-col items-center space-y-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 bg-yellow-50 p-4 rounded-lg shadow-md'>
                        <img src={fp} alt="Featured Property" className='rounded-md shadow-md w-60 h-40 object-cover' />
                        <h2 className='text-2xl font-bold text-gray-800 text-center'>Farm house</h2>
                    </div>
                    <div className='flex flex-col items-center space-y-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 bg-yellow-50 p-4 rounded-lg shadow-md'>
                        <img src={fp2} alt="Featured Property" className='rounded-md shadow-md w-60 h-40 object-cover' />
                        <h2 className='text-2xl font-bold text-gray-800 text-center'>Beach house</h2>
                    </div>
                    <div className='flex flex-col items-center space-y-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 bg-yellow-50 p-4 rounded-lg shadow-md'>
                        <img src={fp3} alt="Featured Property" className='rounded-md shadow-md w-60 h-40 object-cover' />
                        <h2 className='text-2xl font-bold text-gray-800 text-center'>Appartment</h2>
                    </div>
                    <div className='flex flex-col items-center space-y-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 bg-yellow-50 p-4 rounded-lg shadow-md'>
                        <img src={fp4} alt="Featured Property" className='rounded-md shadow-md w-60 h-40 object-cover' />
                        <h2 className='text-2xl font-bold text-gray-800 text-center'>Villa</h2>
                    </div>
                </div>
            </div>
            <section className="bg-white mx-4 my-8 rounded-lg shadow-lg px-6 py-10">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Choose Livity?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center bg-lime-50 p-6 rounded-lg shadow transition hover:-translate-y-1 hover:shadow-xl">
                        <img src={icon} alt="Wide Range of Properties" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-700">Wide Range of Properties</h3>
                        <p className="text-gray-500 text-center">Explore a variety of properties that suit your needs and budget.</p>
                    </div>
                    <div className="flex flex-col items-center bg-lime-50 p-6 rounded-lg shadow transition hover:-translate-y-1 hover:shadow-xl">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888092.png" alt="Trusted Agents" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-700">Trusted Agents</h3>
                        <p className="text-gray-500 text-center">Work with experienced and reliable real estate professionals.</p>
                    </div>
                    <div className="flex flex-col items-center bg-lime-50 p-6 rounded-lg shadow transition hover:-translate-y-1 hover:shadow-xl">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888099.png" alt="Easy Process" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-700">Easy Process</h3>
                        <p className="text-gray-500 text-center">Enjoy a seamless and hassle-free property buying or renting experience.</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Featuredproperty;