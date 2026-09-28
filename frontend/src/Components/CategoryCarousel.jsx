import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchedQuery } from '../redux/jobSlice'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Full Stack Developer",
    "Data Scientist",
    "Product Manager",
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className="w-full px-4 sm:px-6">
            <Carousel className="w-full max-w-xl mx-auto my-12 sm:my-20">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center"
                            >
                                <Button
                                    onClick={() => searchJobHandler(cat)}
                                    variant="outline"
                                    className="rounded-full whitespace-nowrap text-sm sm:text-base"
                                >
                                    {cat}
                                </Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className="left-0 sm:-left-12" />
                <CarouselNext className="right-0 sm:-right-12" />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel
