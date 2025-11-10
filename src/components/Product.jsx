
import ProOne from '../assets/images/pro-one.png'
import Protwo from '../assets/images/pro-two.jpg'
import Prothree from '../assets/images/pro-box1.jpg'
import Profour from '../assets/images/pro-lik.jpg'
import Profive from '../assets/images/pro-box.jpg'
import Prosix from '../assets/images/pro-2.png'

let productData =[
    {
        image:ProOne,
        Name:"iSmart Watch Pro",
        description:"Now with a Aid feature",
        btn1:"Learn More",
        btn2:"Buy"
    },
    {
        image:Protwo,
        Name:"MacBook",
        description:"Performance meets perfect design.",
        btn1:"Learn More",
        btn2:"Buy"
    },
    {
        image:Prothree,
        Name:"MacBook-Air",
        description:"Strikingly thin and fast so you can work, play or create anywhere.",
        btn1:"Learn More",
        btn2:"Buy"
    },
    {
        image:Profour,
        Name:"iPhone 16",
        description:"Amazing Performance Durable design.",
        btn1:"Learn More",
        btn2:"Buy"
    },
    {
        image:Profive,
        Name:"iPad",
        description:"The ulitmate iPad experience with the most advanced technology.",
        btn1:"Learn More",
        btn2:"Buy"
    },
    {
        image:Prosix,
        Name:"AirPods",
        description:"AirPods 4 with Active Noise cancellation",
        btn1:"Learn More",
        btn2:"Buy"
    },
]
function Product(){
    return (
        <>
        <div className='flex items-center justify-around flex-wrap mt-10'>

                {productData.map((data, index)=>(      
            <div className='mt-2 space-y-10 space-x-20 '>
                <div key={index} className='relative inline-block'>
                    <img className='w-[40vw] h-[40vw]' src={data.image} alt="" />
                    <div className='absolute top-2 left-5 md:top-5 md:left-10 text-white'>
                        <h2 className='text-[14px] text-black md:text-3xl font-bold md:pb-4'>{data.Name}</h2>
                        <p className='text-[12px] text-black font-semibold md:text-2xl'>{data.description}</p>
                        <div>
                            <button className='md:my-4 md:p-2 rounded-lg  text-black bg-blue-600 font-semibold hover:bg-blue-800 text-xs p-1 '>{data.btn1} </button>
                            <button className='md:m-4 md:p-2 rounded-2xl border  text-black border-blue-500 md:font-bold px-1 m-1 font-semibold hover:bg-blue-600 '>{data.btn2}</button>
                        </div>
                    </div>
                </div>
                </div>
                ))}


        </div>
        </>
    )
}

export default Product
