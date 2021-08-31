// var x, i, j, l, ll, selElmnt, a, b, c;
// /*look for any elements with the class "custom-select":*/
// x = document.getElementsByClassName("sort");
// console.log(selElmnt = x[0].getElementsByTagName("select")[0])
// for (i = 0; i < l; i++) {
//   selElmnt = x[i].getElementsByTagName("select")[0];
//   ll = selElmnt.length;
//   /*for each element, create a new DIV that will act as the selected item:*/
//   a = document.createElement("DIV");
//   a.setAttribute("class", "select-selected");
//   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//   x[i].appendChild(a);
//   /*for each element, create a new DIV that will contain the option list:*/
//   b = document.createElement("DIV");
//   b.setAttribute("class", "select-items select-hide");
//   for (j = 1; j < ll; j++) {
//     /*for each option in the original select element,
//     create a new DIV that will act as an option item:*/
//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     c.addEventListener("click", function(e) {
//         /*when an item is clicked, update the original select box,
//         and the selected item:*/
//         var y, i, k, s, h, sl, yl;
//         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//         sl = s.length;
//         h = this.parentNode.previousSibling;
//         for (i = 0; i < sl; i++) {
//           if (s.options[i].innerHTML == this.innerHTML) {
//             s.selectedIndex = i;
//             h.innerHTML = this.innerHTML;
//             y = this.parentNode.getElementsByClassName("same-as-selected");
//             yl = y.length;
//             for (k = 0; k < yl; k++) {
//               y[k].removeAttribute("class");
//             }
//             this.setAttribute("class", "same-as-selected");
//             break;
//           }
//         }
//         h.click();
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function(e) {
//       /*when the select box is clicked, close any other select boxes,
//       and open/close the current select box:*/
//       e.stopPropagation();
//       closeAllSelect(this);
//       this.nextSibling.classList.toggle("select-hide");
//       this.classList.toggle("select-arrow-active");
//     });
// }
// function closeAllSelect(elmnt) {
//   /*a function that will close all select boxes in the document,
//   except the current select box:*/
//   var x, y, i, xl, yl, arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   xl = x.length;
//   yl = y.length;
//   for (i = 0; i < yl; i++) {
//     if (elmnt == y[i]) {
//       arrNo.push(i)
//     } else {
//       y[i].classList.remove("select-arrow-active");
//     }
//   }
//   for (i = 0; i < xl; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }
// /*if the user clicks anywhere outside the select box,
// then close all select boxes:*/
// document.addEventListener("click", closeAllSelect);

// `/*css selec */
// .sort {
//     position: relative;
//     color: black;
//   }
  
//   .sort select {
//     display: none; /*hide original SELECT element:*/
//   }
  
//   .select-selected {
//     background-color: white;
//   }
  
//   /*style the arrow inside the select element:*/
//   .select-selected:after {
//     position: absolute;
//     content: "";
//     top: 14px;
//     right: 10px;
//     width: 0;
//     height: 0;
//     border: 6px solid transparent;
//     border-color: #fff transparent transparent transparent;
//   }
  
//   /*point the arrow upwards when the select box is open (active):*/
//   .select-selected.select-arrow-active:after {
//     border-color: transparent transparent #fff transparent;
//     top: 7px;
//   }
  
//   /*style the items (options), including the selected item:*/
//   .select-items div,.select-selected {
//     color: black;
//     padding: 8px 16px;
//     border: 1px solid transparent;
//     border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
//     cursor: pointer;
//     user-select: none;
//   }
  
//   /*style items (options):*/
//   .select-items {
//     position: absolute;
//     background-color: white;
//     top: 100%;
//     left: 0;
//     right: 0;
//     z-index: 99;
//   }
  
//   /*hide the items when the select box is closed:*/
//   .select-hide {
//     display: none;
//   }
  
//   .select-items div:hover, .same-as-selected {
//     background-color: rgba(0, 0, 0, 0.1);
//   } `

var listLi = document.querySelectorAll('.list-sort');
var listLiPrice = document.querySelectorAll('.list-sort-price');
var listLiKind = document.querySelectorAll('.list-sort-kind');
var listLiSize = document.querySelectorAll('.list-sort-size');
var checkActive = document.querySelectorAll('span.check-sort');
var checkActiveprice = document.querySelectorAll('span.check-price');
var checkActivesize = document.querySelectorAll('span.check-size');
var checkActivekind = document.querySelectorAll('span.check-kind');
var getElementLi,getElementLiPrice,getElementLiKind,getElementLiSize;
var num = 0;
getElementLi = listLi[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
for(let i=0 ; i < getElementLi.length ; i++){
    getElementLi[i].addEventListener('click',()=>{
            const icon = `<i class="fas fa-check"></i>`;
            checkActive[i].innerHTML=icon;
            if(num === 1){
              for(let j = 0 ; j < checkActive.length ; j++ ){
                checkActive[j].innerHTML='';
              }
              num =0;
            }else{
                num ++;
            }
        
      })
     
}

getElementLiPrice = listLiPrice[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
for(let i=0 ; i < getElementLiPrice.length ; i++){
    getElementLiPrice[i].addEventListener('click',()=>{

      const icon = `<i class="fas fa-check"></i>`;
        checkActiveprice[i].innerHTML=icon;
        if(num === 1){
          for(let j = 0 ; j < checkActiveprice.length ; j++ ){
            checkActiveprice[j].innerHTML='';
          }
          num =0;
        }else{
            num ++;
        }
        
    
    })
}

getElementLiKind = listLiKind[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
for(let i=0 ; i < getElementLiKind.length ; i++){
    getElementLiKind[i].addEventListener('click',()=>{

      const icon = `<i class="fas fa-check"></i>`;
        checkActivekind[i].innerHTML=icon;
        if(num === 1){
          for(let j = 0 ; j < checkActivekind.length ; j++ ){
            checkActivekind[j].innerHTML='';
          }
          num =0;
        }else{
            num ++;
        }
        
    
    })
}

getElementLiSize = listLiSize[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
for(let i=0 ; i < getElementLiSize.length ; i++){
    getElementLiSize[i].addEventListener('click',()=>{

      const icon = `<i class="fas fa-check"></i>`;
        checkActivesize[i].innerHTML=icon;
        if(num === 1){
          for(let j = 0 ; j < checkActivesize.length ; j++ ){
            checkActivesize[j].innerHTML='';
          }
          num =0;
        }else{
            num ++;
        }
        
    
    })
}

function resize() {
  if(window.innerWidth < 1000){
    console.log('<1000');
  }
  // console.log("height: ", window.innerHeight, "px");
  // console.log("width: ", window.innerWidth, "px");
}

window.onresize = resize;
if(window.innerWidth < 1000){
  document.querySelector('.sort-price').addEventListener('click', () => {
    document.querySelector('.list-sort-price').classList.toggle('class-vip');
    console.log(1);
  })
  document.querySelector('.sort-kind').addEventListener('click', () => {
    document.querySelector('.list-sort-kind').classList.toggle('class-vip');
    console.log(1);
  })
  document.querySelector('.sort-size').addEventListener('click', () => {
    document.querySelector('.list-sort-size').classList.toggle('class-vip');
    console.log(1);
  })
}


