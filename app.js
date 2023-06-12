$(document).ready(() => {
    const $btn = $('.btn')
    const $skillsList = $('.skills-list');
    const $place = $('.place');

    $btn.on('click', (event) => {
        console.log(event)
        $skillsList.append(`<li>${event.target.name}</li>`)
    })

    const skillsArray = [
    		{
    			name: 'Problem Solving',
    			img: 'https://fullpotentialgroup.com/wp-content/uploads/2020/01/Problem-solving-RS2-750x675.jpg'
    		},
    		{
    			name: 'Critical',
    			img: 'https://www.insidehighered.com/sites/default/files/media/thinking-vector-id516547349_0.jpg'
    		},
    		{
    			name: 'Dedicated',
    			img: "https://www.orientsoftware.com/Themes/OrientSoftwareTheme/Content/Images/dedicated-team/Dedicated-Team-Process-01.jpg"
    		},
            {
                name: 'Team Work',
                img: "https://www.wework.com/ideas/wp-content/uploads/sites/4/2022/08/iStock-1404450332_Nine-characteristics-of-great-teamwork_v1-scaled.jpg"
            }
    
    	];
    
    skillsArray.forEach(skillSetObj => {
        const $card = $(`<div class="col card holder">${skillSetObj.name}</div>`)
            .attr('id',`${skillSetObj.name}`);
    
        const skillImage = $(`<img class="skillImage" src=${skillSetObj.img}>`);
    
        const toAddbutton = addButton(skillSetObj);
        
        $card.append(skillImage);
        $card.append(toAddbutton);
        $place.append($card)
    
    })
    
    function addButton(skillSet) {
        return $(`<button style="padding: 5px"class="btn button">I agree</button>`).on(
    				'click',
    				() => {
    					$skillsList.append(`<li>${skillSet.name}</li>`)
    				}
    			)
    }
		
})
