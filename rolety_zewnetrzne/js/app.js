// modal 
const modal = document.querySelectorAll(".modal");
// przycisk otwierajacy modala
const btn = document.querySelectorAll(".button");
// span zamykajacy modala
const span = document.querySelectorAll(".close");
// aktualnie wyswietlany modal
let modalActive=document.getElementsByClassName("modal active");
// otwieanie modala kiedy kliknie na grafike
        //NodeList to array
        let btnArray = Array.from(btn);
        //
        function setOnClick(item, index){
          item.onclick=()=>{
            modal[index].classList.add("active");
            document.body.style="overflow:hidden;";
          }
        }
        //
        btnArray.forEach(setOnClick);  
        //  
// zamykanie modala kiedy kliknie x
        //
        let spanArray = Array.from(span);
        //
        function setOnClose(item,index){
          item.onclick=()=>{
            modalActive[0].classList.remove("active");
            document.body.style="overflow:auto;";
          }
        }
        spanArray.forEach(setOnClose);