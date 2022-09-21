var smart = document.getElementById('Smart_Div');

var Original_Scontent = `
<div class="row">
<div class="col-md-3">
   <div class="blog">
   
   <input type="text" id="input" placeholder="Enter Data">
   <a button id="AddData" class="btn btn" onclick="addstudent()">Add Data</a></button>
  
 
      <select style="color:black" value=""Show Data>
         <option value="" disabled selected hidden>Show Data</option>
         <option >test1</option>
         
      </select>
      
   </div>
</div>
</div>`

fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => {
      json.forEach(element => {
         var Scontent = Original_Scontent;
         Scontent = Scontent.replace('test1',element.name)

         var smarttt = document.createElement('S_Div')
         smarttt.innerHTML = Scontent
         smarttt.className = "col-md-8 col-md-offset-2 text-center heading";
         smart.appendChild(smarttt)
      });
   });

