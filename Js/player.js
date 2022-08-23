const allPlayers = [];
function topPlayers(){
    const playerSelect = document.getElementById('selected-item');
    playerSelect.innerText = '';

    for(let i = 0; i < allPlayers.length; i++){
        const playerList = allPlayers[i];
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <th>${i+1}.</th>
        <th>${playerList}</th>
        `
        playerSelect.appendChild(tr);
    
    }
}

function playerSelect(players)
{
    const playersName = players.parentNode.parentNode.children[0].innerText;
    allPlayers.push(playersName)
    // console.log(allPlayers)
    topPlayers(allPlayers);
}