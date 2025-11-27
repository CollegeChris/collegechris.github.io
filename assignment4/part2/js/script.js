const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const baseURL = "./images/";

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
	}
];

for (const image of images) {
	
	const newImage = document.createElement("img");
	newImage.src = baseURL + image.src;
	newImage.alt = image.alt;
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
	
	newImage.addEventListener("keydown", (newImage) =>
	{
		if (newImage.code === "Enter")
		{
			updateDisplayedImage(newImage);
		}
	});
}

function updateDisplayedImage(newImage)
{
	displayedImage.src = newImage.target.src;
	displayedImage.alt = newImage.target.alt;
}