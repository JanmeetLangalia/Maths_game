
function addUser(){

    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;
 
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    

    player1_name_stored=localStorage.getItem("player1_name");
    console.log (player1_name_stored);
    window.location="game_page.html";
    

}