const customAristocrat = document.getElementById("custom")
const aristocratBox = document.getElementById("aristocrat")

let running = false
let start = 0
let time = 0

function renderAristocrat(type) {
	aristocratBox.innerHTML = ""
	if (type === "custom") {
		const aristocrat = customAristocrat.value.split("\n").join("").split("")

		for (let letter of aristocrat) {
			let ltr = addLetter(letter)
		}
	} else {
		customAristocrat.style.display = "none"
	}
}

function addLetter(letter) {
	if (letter === " " || letter === "," || letter === "." || letter === "!" || letter === "?" || letter === "'" || letter === "-"|| letter === "“" || letter === "”" || letter === "—"|| letter === "…") {
		aristocratBox.innerHTML += `
			<div class="letter" >
				<div class="above">${letter}</div>
				<div class="below"style="opacity: 0;">
						<textarea name="" id="" cols="1" rows="1" style="resize: none;" maxLength="1" disabled></textarea>
				</div>
			</div>`
	} else {
		aristocratBox.innerHTML += `
			<div class="letter">
				<div class="above">${letter.toUpperCase()}</div>
				<div class="below">
						<textarea name="" id="" cols="1" rows="1" style="resize: none;" maxLength="1"></textarea>
				</div>
			</div>`
	}
	return aristocratBox.children[aristocratBox.children.length - 1]
}

document.addEventListener("keydown", (e) => {
	let elem = document.activeElement
	if (elem.tagName === "TEXTAREA" && elem.maxLength == "1" && e.which >= 65 && e.which <= 90) {
		elem.value = String.fromCharCode(e.which).toUpperCase()
	}
})

function startStopwatch(){
	start = Date.now()
	time = 0
	running = true
}

function stopStopwatch(){
	running = false
}
setInterval(() => {
	if(running){
		time = Date.now() - start
		document.getElementById("stopwatch").innerText = (time / 1000).toFixed(2)
	}
}, 10)