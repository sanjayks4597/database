var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addnewproject");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var selectrow=null;
function onformSubmit(){

    var formData1=readFormData();
    if(selectrow==null)
    {
        insertNewRecord(formData1);
    }
    else
    {
        updateRecord(formData1);
    }
    resetForm();
    modal.style.display="none";

}

function readFormData(){
    
    var formData={};
    formData['fullname'] = document.getElementById('fullname').value;
    formData['date'] = document.getElementById('date').value;
    formData['status'] = document.getElementById('status').value;
    formData['teammembers'] = document.getElementById('teammembers').value;
    formData['progess'] = document.getElementById('progress').value;

    return formData;
}
function insertNewRecord(data){
    var table=document.getElementById('projectfields').getElementsByTagName('tbody')[0];
    var newrow=table.insertRow(table.length);
    var i=table.rows.length;
    cell0=newrow.insertCell(0);
    cell0.innerHTML=`${i}`;

    cell1=newrow.insertCell(1);
    cell1.innerHTML=data.fullname;


    cell2=newrow.insertCell(2);
    cell2.innerHTML=data.date;


    cell3=newrow.insertCell(3);
    cell3.innerHTML=data.status;

    cell4=newrow.insertCell(4);
    cell4.innerHTML=data.teammembers;

    cell5=newrow.insertCell(5);
    cell5.innerHTML=data.progess;

    cell6=newrow.insertCell(6);
    cell6.innerHTML=`<a class="edit" onclick="onEdit(this)">Edit</a>
                     <a class="delete" onclick="onDelete(this)">Delete</a>`;

}

function onEdit(td){
    selectrow=td.parentElement.parentElement;
    document.getElementById('fullname').value=selectrow.cells[1].innerHTML;
    document.getElementById('date').value=selectrow.cells[2].innerHTML;
    document.getElementById('status').value=selectrow.cells[3].innerHTML;
    document.getElementById('teammembers').value=selectrow.cells[4].innerHTML;
    document.getElementById('progress').value=selectrow.cells[5].innerHTML;

    modal.style.display = "block";

}

function updateRecord(formdata)
{
    selectrow.cells[1].innerHTML=formdata.fullname;
    selectrow.cells[2].innerHTML=formdata.date;
    selectrow.cells[3].innerHTML=formdata.status;
    selectrow.cells[4].innerHTML=formdata.teammembers;
    selectrow.cells[5].innerHTML=formdata.progress;
}
function resetForm(){
    document.getElementById('fullname').value="";
    document.getElementById('date').value="";
    document.getElementById('status').value="";
    document.getElementById('teammembers').value="";
    document.getElementById('progress').value="";
    selectrow=null;
}
function onDelete(td){
    if(confirm('Are you sure to delete this record ?'))
    {
        row=td.parentElement.parentElement;
        document.getElementById('projectfields').deleteRow(row.rowIndex);
        resetForm();
    }
    
}

function filter(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    table = document.getElementById("projectfields");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.innerText || td.innerHTML;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }
}