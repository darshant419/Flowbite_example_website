import { Carousel } from "flowbite-react"


const DarkRoundedButton = () => {
  return (

<>
<div>
    <p className="text-6xl font-bold text-green-700 ">
        This is JUNGLE
    </p>
</div>
<div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel>
        <img className="w-full object-scale-down" src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww" alt="..." />
        <img className="w-full object-scale-down" src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww" alt="..." />
        <img className="w-full object-scale-down"src="https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww" alt="..." />
        <img className="w-full object-scale-down" src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdpbGRsaWZlfGVufDB8fDB8fHww" alt="..." />
        <img className="w-full object-scale-down"src="https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D" alt="..." />
      </Carousel>
    </div>

</>
  )
}

export default DarkRoundedButton