const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const baseURL = "./assets";

function updateDisplayedImage()
{
}

const images = [
	{
		src: "pic1.jpg",
		alt: "Closeup of a human eye"
	},
	{
		src: "pic2.jpg",
		alt: "Rock that looks like a wave"
	},
	{
		src: "pic3.jpg",
		alt: "Purple and white pansies"
	},
	{
		src: "pic4.jpg",
		alt: "Section of wall from a pharaoh's tomb"
	},
	{
		src: "pic5.jpg",
		alt: "Large moth on a leaf"
	},	
];

for (const image of images) {
	const newImage = document.createElement("img");
	newImage.href = baseURL + image.src;
	newImage.textContent = image.alt;
	newImage.tabIndex = "1";
	thumbBar.appendChild(newImage);
	
	//alert(newImage.src);
	
	/*
	newImage.addEventListener("click", () => {
		displayedImage.src = newImage.src;
		displayedImage.alt = newImage.alt;
	});
	*/
	
	newImage.addEventListener("click", updateDisplayedImage);
}