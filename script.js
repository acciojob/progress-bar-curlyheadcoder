//your JS code here. If required.
const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.getElementById('.circle');

let currentActive = 1;
nextBtn.addEventListener('click',() =>{
	currentActive++;
	if(currentActive > circles.length){
		currentActive = circles.length;
	}
	update();
});
prevBtn.addEventListener('click', () => {
	currentActive--;
	if(currentActive < 1){
		currentActive = 1;
	}
	update();
});
function update() {
	circles.forEach((circle, idx) => {
		if(idx < currentActive){
			circle.classList.add('active');
		}else{
			circle.classList.remove('active');
		}
	});
	const progressPercent = ((currentActive-1) / (circles.length-1))*100;
	progress.style.width = `${progressPercent}%`;
	prevBtn.disabled = currentActive === 1;
	nextBtn.disabled = currentActive === circles.length;
}