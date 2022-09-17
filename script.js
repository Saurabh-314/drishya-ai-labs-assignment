
function totalSum() {
  let sumColumn_1 = 0;
  let sumColumn_2 = 0;
  let sumColumn_3 = 0;
  let table = document.getElementById('table');

  for (let i = 1; i < table.rows.length; i++) {
    sumColumn_1 += parseInt(table.rows[i].cells[0].innerText);
    sumColumn_2 += parseInt(table.rows[i].cells[1].innerText);
    sumColumn_3 += parseInt(table.rows[i].cells[2].innerText);
  }
  console.log(sumColumn_1, sumColumn_2, sumColumn_3);

  document.getElementById('sum1').innerText = sumColumn_1;
  document.getElementById('sum2').innerText = sumColumn_2;
  document.getElementById('sum3').innerText = sumColumn_3;
}

// delete function
function dlt(event) {
  console.log(event);
  let tr = event.target.parentNode.parentNode;
  tr.remove();
}

// Edit function
function edit(event) {
  let ebtn = event.target;
  let tr = event.target.parentNode.parentNode;
  if (ebtn.innerText == 'Edit') {
    ebtn.innerText = 'Save'
    tr.cells[0].setAttribute('contenteditable', 'true');
    tr.cells[1].setAttribute('contenteditable', 'true');
    tr.cells[2].setAttribute('contenteditable', 'true');
  } else {
    ebtn.innerText = 'Edit'
    totalSum();
    tr.cells[0].setAttribute('contenteditable', 'false');
    tr.cells[1].setAttribute('contenteditable', 'false');
    tr.cells[2].setAttribute('contenteditable', 'false');
  }
}

// Add table
function addTable(event) {
  let newTr = `
      <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>
          <button onclick="edit(event)">Edit</button>
          <button onclick="dlt(event)">Delete</button>  
        </td>
      </tr>`;
  table.innerHTML += newTr;
}