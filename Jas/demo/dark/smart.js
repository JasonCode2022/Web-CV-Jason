var smart = document.getElementById('Smart_Div');

var Original_Scontent = `
<div class="row">
<div class="col-md-3">
   <div class="blog">
   
   <input id="input" placeholder="123-45-678"></input>
  
   <a id="AddData" class="btn btn">Add Data</a>
      <select>
         <option style="color:red" value="">Enter Data</option>
         <option >test1</option>
         <option >test2</option>
      </select>
      
   </div>
</div>
</div>`

fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => {
      json.forEach(element => {
         var Scontent = Original_Scontent;
         Scontent = Scontent.replace()

         var smarttt = document.createElement('S_Div')
         smarttt.innerHTML = Scontent
         smarttt.className = "col-md-8 col-md-offset-2 text-center heading";
         smart.appendChild(smarttt)
      });
   });

