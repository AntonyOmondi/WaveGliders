import wavegliders1 from '../assets/wavegliders1.JPG'

export default function Programmes(){
    return(
        <>
            <div className='flex justify-center gap-15 align-center mt-10 border-2'>
                <img src={wavegliders1} alt="" className='w-120 h-110 border-2'/>
                <div className='m-4 p-4'>
                    <h1 className='text-xl text-center font-bold text-gray-700 border-2'>Welcome to Wave Gliders Swim Club</h1>
                    
                    <div className='flex flex-col gap-2 border'>
                        <div className='bg-gray-200 p-5 shadow-inner border m-2'>
                            <h1 className='text-lg'>Certified Coaches</h1>
                            <p>Professional Coaches with over 10+ year of experience</p>
                        </div>
                        <div className='bg-gray-200 p-5 shadow-inner border m-2'>
                            <h1>Proven Training Programmes</h1>
                            <p>Personal taylored programmes to guarantee quality</p>
                        </div>
                        <div className='bg-gray-200 p-5 shadow-inner border m-2'>
                            <h1>Safety First</h1>
                            <p>Lifeguard-certified instructors & emergency protocols</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}