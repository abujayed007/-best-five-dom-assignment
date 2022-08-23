document.getElementById('btn-calculate').addEventListener('click', function(){
    const selectedPlayers = allPlayers.length

    const playerField = document.getElementById('player-field')
    const newPlayerFieldString = playerField.value;
    const newExpencesAmount = parseFloat(newPlayerFieldString);
    playerField.value = '';

    const totalCosts = selectedPlayers * newExpencesAmount;

    const playerExpences = document.getElementById('player-expence')
    const newPlayerExpence = playerExpences.innerText;
    playerExpences.innerText = totalCosts;
    

})
document.getElementById('total-btn').addEventListener('click', function(){
    const managerField = document.getElementById('manager-field');
    const managerExpenceString = managerField.value;
    const managerExpence = parseFloat(managerExpenceString);
    managerField.value = '';

    const coachField = document.getElementById('coach-field');
    const coachExpenceString = coachField.value;
    const coachExpence = parseFloat(coachExpenceString);

    coachField.value= '';

    const playerExpences = document.getElementById('player-expence')
    const newPlayerExpenceString = playerExpences.innerText;
    const newPlayerExpence = parseFloat(newPlayerExpenceString);
   


    const teamTotalExpences = newPlayerExpence + coachExpence + managerExpence;


    const totalExpences = document.getElementById('total-expence')
    totalExpences.innerText = teamTotalExpences;


    
})