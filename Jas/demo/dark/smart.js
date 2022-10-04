var smart = document.getElementById('Smart_Div');

var Original_Scontent = `
<div class="row">
<div class="col-md-3">
   <div class="blog">
   
   <input style="color:black" type="text" id="input" placeholder="Enter Data">
   <a button id="AddData" class="btn btn" onclick="Add_Data()">Add Data</a></button>
  
 
      <select style="color:black" value=""Show Data>

         <option value="" disabled selected hidden>Show Data</option>
         <option id="Fir" >test1</option>
         <option id="Sec" >Description</option>
         
      </select>
      
   </div>
</div>
</div>`

fetch('http://localhost:3000/services')
   .then(response => response.json())
   .then(json => {
      json.Services.forEach(element => {
         var Scontent = Original_Scontent;
         Scontent = Scontent.replace('test1',element.A)
         Scontent = Scontent.replace('Description',element.B)

         var smarttt = document.createElement('S_Div')
         smarttt.innerHTML = Scontent
         smarttt.className = "col-md-8 col-md-offset-2 text-center heading";
         smart.appendChild(smarttt)
      });
   });

