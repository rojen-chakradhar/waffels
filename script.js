function loader() {
	let loader = document.getElementById("loader");
	setTimeout(() => {
		loader.style.top = "-100vh";
		setTimeout(() => {
			loader.style.display = "none";
		}, 1000);
	}, 1500);
}
loader();

let waffles = [
	"https://cdn.shopify.com/s/files/1/0173/8181/8422/files/20240523183203-screenshot-202024-05-10-20at-204.png?v=1716489126&width=1600&height=900",
	"https://www.allrecipes.com/thmb/imrP1HYi5pu7j1en1_TI-Kcnzt4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20513-classic-waffles-mfs-025-4x3-81c0f0ace44d480ca69dd5f2c949731a.jpg",
	"https://cravinghomecooked.com/wp-content/uploads/2019/02/easy-waffle-recipe-1-16.jpg",
	"https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/c6ea15c4-52ab-4119-b886-a7fb1d052f45/Derivates/b18fcddc-3b31-4ae9-9cd1-5a81751d91b3.jpg",
	"https://cdn.loveandlemons.com/wp-content/uploads/2024/12/waffle.jpg",
	"https://www.tasteofhome.com/wp-content/uploads/2024/09/Waffle-Recipe_EXPS_FT24_21376_EC_0823_1.jpg",
	"https://foolproofliving.com/wp-content/uploads/2023/02/Brioche-Waffles.jpg",
];

let image = document.getElementById("image");
let num = 0;
image.src = waffles[num];

function moreWaffles() {
	num++;
	if (num >= waffles.length) {
		num = 0;
	}
	image.src = waffles[num];
}

function openMenu() {
	let menu = document.getElementById("menu");
	menu.style.display = "flex";
	setTimeout(() => {
		menu.style.top = "0";
	}, 500);
}

function closeMenu() {
	let menu = document.getElementById("menu");
	menu.style.top = "-100vh";
	setTimeout(() => {
		menu.style.display = "none";
	}, 500);
}

let i = 0;
function changeLayout() {
	let main = document.querySelector("main");
	let nav = document.querySelector("nav");
	if (i == 0) {
		main.style.height = "100dvh";
		main.style.display = "flex";
		nav.style.flexDirection = "column";
		nav.style.borderRight = "2px solid #333";
		nav.style.borderBottom = "none";
		i=1;
	} else {
		main.style.height = "100dvh";
		main.style.display = "block";
		nav.style.flexDirection = "row";
		nav.style.borderBottom = "2px solid #333";
		nav.style.borderRight = "none";
		i=0;
	}
}