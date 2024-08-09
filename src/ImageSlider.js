import { useState, useEffect } from "react"
const imgData = [
    "https://c4.wallpaperflare.com/wallpaper/86/419/788/random-green-hd-wallpaper-preview.jpg",
    "https://i.pinimg.com/564x/23/5e/09/235e09099e71c062df1aea0d2babd2a6.jpg",
    "https://wallhalla.com/thumbs/42",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWuHAVjGQiNanxGmwz2LrbQ84qIuQc2xORQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqCI2ObxWlJEJaT_iJrejt7IKRmq8bExwlpA&s"
]
const ImageSlider = () => {
    const [activeImgIndex, setActiveImgIndex] = useState(0)
    const handlePrev = () => {
        setActiveImgIndex((prevIndex) => (prevIndex + imgData.length - 1) % imgData.length)
    }
    const handleNext = () => {
        setActiveImgIndex((prevIndex) => (prevIndex + 1) % imgData.length)
    }
    useEffect(() => {
        // clear the existing timer before creating a new one
        console.log('calling useEffect');
        
        const timer = setTimeout(() => {
            handleNext()
            console.log('Inside setTimeout');
        }, 5000)
        return () => {
            console.log('Inside clearTimeout');

            clearTimeout(timer)
        }
    }, [activeImgIndex])

    return (
        <div className="flex justify-center">
            <button className="font-bold p-4 m-4" onClick={handlePrev}>Prev</button>

            {
                imgData.map((url, index) => (
                    <img src={url} alt="dummy" className={
                        "w-96 h-64 " + (activeImgIndex === index ? "block" : "hidden")
                    } key={url}/>
                ))
            }
            <button className="font-bold p-4 m-4" onClick={handleNext}>Next</button>

        </div>
    )
}

export default ImageSlider;