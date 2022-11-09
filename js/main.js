let mainBody = document.querySelector('#main-body');

// Buttons
let accBtn = document.querySelector('#accBtn');
let addBtn = document.querySelector('#addBtn');
let editBtn = document.querySelector('#editBtn');

// Views
let accView = document.querySelector('#accView');
let addView = document.querySelector('#addView');

// Button Save
let saveBtn = document.querySelector('#saveBtn');

// Input Fields
let inputName = document.querySelector('[name="name"]');
let inputDeposit = document.querySelector('[name="deposit"]');
let inputCreditCard = document.querySelector('[name="credit_card"]');

DB.getAll().then((data)=>{
  //console.log(data);
  createTable(data);
},(err)=>{
  console.log(err);
})


addBtn.addEventListener('click', displayAddView);
accBtn.addEventListener('click', displayAccView);
saveBtn.addEventListener('click',  saveNewAccount);

function displayAddView(){
  addView.style.display = "block";
  accView.style.display =  "none";

}

function displayAccView(){
  addView.style.display = "none";
  accView.style.display =  "block";
}


function saveNewAccount(){
  let  newAccount = {
      name :inputName.value,
      deposit: inputDeposit.value,
      credit_card : inputCreditCard.value
  };
//  console.log(newAccount);
DB.save(newAccount).then((res)=>{
  DB.getAll().then((data)=>{
    //  console.log(data);
    createTable(data);
    displayAccView();
  },(err)=>{
  console.log(err);
  })
      console.log(res);  // success
},(err)=>{
  console.log(err); // error
})

}





function createTable(data){
    let text = '';

    for(var i=0; i<data.length; i++){
        text += `
        <tr>
          <td>${data[i].id}</td>
          <td>${data[i].name}</td>
          <td>${data[i].deposit}</td>
          <td>${data[i].credit_card}</td>
        </tr>
        `;
    }
    //console.log(text);
    mainBody.innerHTML =  text;
}
