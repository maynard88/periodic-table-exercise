function getElementByPeriodAndGroup(period, group) {

     // return null for these element
     if ((period == 6 || period == 7 ) && group == 3) return null;  
     const element = elementsData.find(item => item.period === period && item.group === group);
     return element || null;
}

const numRows = 7;
const numCols = 18;

const largeTable = document.querySelector(".periodic-table tbody");

for (let row = 0; row < numRows; row++) {
     const newRow = document.createElement("tr");
     for (let col = 0; col < numCols; col++) {
          const newCell = document.createElement("td");
          newCell.classList.add('element');        
          const element = getElementByPeriodAndGroup(row + 1, col + 1);        
          if (element){
               if (element["cpk-hex"] != null ) newCell.style.backgroundColor = `#${element["cpk-hex"]}`;            
               newCell.innerHTML = `
                    <div class="number">${element.number}</div>
                    <div class="symbol">${element.symbol}</div>
                    <div class="name">${element.name}</div>
                    
                    <div class="mass">${element.atomic_mass.toFixed(3)}</div>
                    `;      
          }   

          newRow.appendChild(newCell);
     }
     largeTable.appendChild(newRow);
}