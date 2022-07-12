import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// const url= "http://localhost:8000/login"
// const [userDetails, setUserDetails]= useState( [{}] )
// useEffect( () =>{
//     axios.get(url).then(res =>{
//         setUserDetails(res.data)
//     })
// }, [])

// var userData= userDetails

var sliderData = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1626288215937-747af7be5b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fDklM0ExNnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        altText: "img1",
        label: "First slide label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 2,
        src: "https://images.unsplash.com/photo-1626288215937-747af7be5b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fDklM0ExNnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        altText: "img2",
        label: "Second slide label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 3,
        src: "https://images.unsplash.com/photo-1626288215937-747af7be5b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fDklM0ExNnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        altText: "img3",
        label: "Third slide label",
        desc: "Some representative placeholder content for the first slide."
    }
]

var categoriesData = [
    {
        id: 1,
        src: "assets/img/nature/image1.jpg",
        altText: "img1",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 2,
        src: "assets/img/nature/image2.jpg",
        altText: "img2",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 3,
        src: "assets/img/nature/image3.jpg",
        altText: "img3",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 4,
        src: "assets/img/nature/image4.jpg",
        altText: "img4",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 5,
        src: "assets/img/nature/image5.jpg",
        altText: "img5",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 6,
        src: "assets/img/nature/image6.jpg",
        altText: "img6",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },
]

var productsData = [
    {
        id: 1,
        src: "assets/img/nature/image1.jpg",
        altText: "img1",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 2,
        src: "assets/img/nature/image2.jpg",
        altText: "img2",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 3,
        src: "assets/img/nature/image3.jpg",
        altText: "img3",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 4,
        src: "assets/img/nature/image4.jpg",
        altText: "img4",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 5,
        src: "assets/img/nature/image5.jpg",
        altText: "img5",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 6,
        src: "assets/img/nature/image6.jpg",
        altText: "img6",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },
]

var flashData1 = [
    {
        id: 1,
        src: "assets/img/nature/image1.jpg",
        altText: "img1",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 2,
        src: "assets/img/nature/image2.jpg",
        altText: "img2",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 3,
        src: "assets/img/nature/image3.jpg",
        altText: "img3",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 4,
        src: "assets/img/nature/image4.jpg",
        altText: "img4",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },
]

var flashData2 = [
    {
        id: 1,
        src: "assets/img/nature/image1.jpg",
        altText: "img1",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 2,
        src: "assets/img/nature/image2.jpg",
        altText: "img2",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 3,
        src: "assets/img/nature/image3.jpg",
        altText: "img3",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 4,
        src: "assets/img/nature/image4.jpg",
        altText: "img4",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },
]

var flashData3 = [
    {
        id: 1,
        src: "assets/img/nature/image1.jpg",
        altText: "img1",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 2,
        src: "assets/img/nature/image2.jpg",
        altText: "img2",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 3,
        src: "assets/img/nature/image3.jpg",
        altText: "img3",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },

    {
        id: 4,
        src: "assets/img/nature/image4.jpg",
        altText: "img4",
        label: "First label",
        desc: "Some representative placeholder content for the first slide."
    },
]

var profileImage = [
    {
        id: 1,
        src: "https://api.multiavatar.com/" + Math.floor(Math.random() * 1000000) + ".svg",
        altText: "Image Loading...",

    },

    {
        id: 2,
        src: "https://api.multiavatar.com/" + Math.floor(Math.random() * 1000000) + ".svg",
        altText: "Image Loading...",

    },

    {
        id: 3,
        src: "https://api.multiavatar.com/" + Math.floor(Math.random() * 1000000) + ".svg",
        altText: "Image Loading...",

    },

    {
        id: 4,
        src: "https://api.multiavatar.com/" + Math.floor(Math.random() * 1000000) + ".svg",
        altText: "Image Loading...",

    },

    {
        id: 5,
        src: "https://api.multiavatar.com/" + Math.floor(Math.random() * 1000000) + ".svg",
        altText: "Image Loading...",

    },

    {
        id: 6,
        src: "https://api.multiavatar.com/" + Math.floor(Math.random() * 1000000) + ".svg",
        altText: "Image Loading...",
    },
]

// var image= () =>{
//     const [imageSrc, setImageSrc] = useState([]);
//     useEffect(() => {
//         axios
//             .get("http://localhost:8000/sendImage")
//             .then(res => setImageSrc(res.imageURL))
//             .catch(error => console.log(error))
//     })
    
//     console.log("Sending from here");
//     console.log(imageSrc);

//     return imageSrc
// }

export { sliderData, categoriesData, productsData, flashData1, flashData2, flashData3, profileImage }