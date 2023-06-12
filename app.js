$(document).ready(() => {
	const $btn = $('.btn')
    const $skillsList = $('.skills-list')
   

    $btn.on('click', (event) => {
            console.log(event)
            $skillsList.append(`<li>${event.target.name}</li>`)
        })
	
})
