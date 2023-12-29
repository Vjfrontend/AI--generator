// const accesskey = "MHzFs2r12qR9mNf4zEe_NrhYq9NsF2Svp9P98agZ6rs";

// const generateForm = document.getElementsByClassName("generate-form");
// const promptInput = document.getElementsByClassName("prompt-input");
// const generateBtn = document.getElementsByClassName("generate-btn");
// const controls = document.getElementsByClassName("controls");



// let keyword ="";
// let page =1;

// async function searchImages(){
//     keywordsearchtext.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;

//     const response = await fetch(url);
//     const data = await response.json();

//     console.log(data);


// }
// generateForm.addEventlistener("submit",(e) =>{
//     e.preventDefault();
//     page = 1;
//     searchImages();



// })


// const generateform = document.querySelector("generate-form ");
// const imageGallery = document.querySelector("img-gallery");

// const accesskey = "MHzFs2r12qR9mNf4zEe_NrhYq9NsF2Svp9P98agZ6rs";





// const generateAiImages = async (userPrompt, userImgQuantity) => {
//     try{
//         const response = await fetch ("https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${accesskey}`
//         },
//         body: JSON.stringify({
//             prompt:userPrompt,
//             n: parseInt(userImgQuantity),
//             size: "si2x512",
//             response_format: "b64_json"

//         })

//         });

// if(!response.ok) throw new  Error("faild to generate images! plaese try again.");

//         const { data } = await response.json();
//         console.log(data);
//    } catch (error) {
//     console.log(error);
//    }
// }


// const handleformsubmission = (e) => {
//     e.preventdefault();

//     const userPrompt = e.srcElemeent[0].value;
//     const userImgQuantity = e.srcElement[1].value;

//     const imgCardMarkup = Array.from({length: userimgQuantity}, () =>
//     `<div class="img-card">
//     <img src="2.jpg" alt="image"><br>
//     <a href="#" class="download-btn"> <img src="file.png"  alt="">
//     </a>
//      </div>`
//     ).join("");

//     imageGallery.innerHTML = imgCardMarkup;
//     generateAiImages(userPrompt, userImgQuantity);
// }

// generateform.addEventListener("submit",handleformsubmission);



// javascript.js

const accessKey = "MHzFs2r12qR9mNf4zEe_NrhYq9NsF2Svp9P98agZ6rs";
let page = 1;
let keyword = "";

const generateForm = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".img-gallery");

// const updateimagecard = (imgDataArray) => {
//     imgDataArray.forEach((imgObject,index) => {
//         const  imgCard = imageGallery.querySelectorAll(".img-card")[index];
//         const imgElement = imgCard.querySelector("img");
//         const downloadBtn = imgCard.querySelector("download-btn");

//         imgElement = () => {
//         downloadBtn.setAttribute("href", aiGeneratedIMG);
//         downloadBtn.setAttribute("download", `${new Date().getTime()}.jpg`);
//         }
//      });
// }

const generateAiImages = async (userPrompt, userImgQuantity) => {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${userPrompt}&client_id=${accessKey}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Client-ID ${accessKey}`
            }
        });

        if (!response.ok) {
            throw new Error("Failed to generate images! Please try again.");
        }

        const { results } = await response.json();

        const imgCardMarkup = results.slice(0, userImgQuantity).map(result =>
            `<div class="img-card">
                <img src="${result.urls.regular}" alt="${result.alt_description}">
                <br>
                <a href="${result.links.download}" class="download-btn">
                    <img src="file.png" alt="Download">
                </a>
            </div>`
        ).join("");

        imageGallery.innerHTML = imgCardMarkup;
    } catch (error) {
        console.error(error);
    }
};

const handleFormSubmission = async (event) => {
    event.preventDefault();

    const userPrompt = document.querySelector(".prompt-input").value;
    const userImgQuantity = document.querySelector("#image-quantity").value;

    generateAiImages(userPrompt, userImgQuantity);
};

generateForm.addEventListener("submit", handleFormSubmission);
