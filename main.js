
 //code to get the json file 

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var response = JSON.parse(xhttp.responseText) ;

       var data = response.data;

       console.log(typeof data);

        var array = []
       // to print out the the DOM
       var output = '';

       

        //looping through the array gotten from the json file
       var i = 0;
       for(i = 0; i <data.length ; i++){

        //sort array 
        var sortable = [];
        for (var a in  data[i].total_points) {
            sortable.push([a, data[i].total_points[a]]);
        }

        sortable.sort(function(a, b) {
            return a[1] - b[1];
        
          });

          console.log(data[i].total_points); 

       
        //make the top three on the leaderboard distinct
        if(i<1){
          output += `
          <tr class='bg-danger text-white'>
              <td> ${data[i].id} </td>
              <td> ${data[i].fullname} </td>
              <td> ${data[i].username} </td>
              <td> ${data[i].email} </td>
              <td> ${data[i].total_points} </td>
            </tr> ` ;
            console.log(Math.max(data[i].total_points)); 
          } else if (i<2){
          output += `
          <tr class='bg-warning text-white'>
              <td> ${data[i].id} </td>
              <td> ${data[i].fullname} </td>
              <td> ${data[i].username} </td>
              <td> ${data[i].email} </td>
              <td> ${data[i].total_points} </td>
            </tr> ` ;
          }else if (i<3){
            output += `
          <tr class='bg-info text-white'>
              <td> ${data[i].id} </td>
              <td> ${data[i].fullname} </td>
              <td> ${data[i].username} </td>
              <td> ${data[i].email} </td>
              <td> ${data[i].total_points} </td>
            </tr> ` ;
          }
          //make the others a normal row
          else{

          output += `
              <tr>
                <td> ${data[i].id} </td>
                <td> ${data[i].fullname} </td>
                <td> ${data[i].username} </td>
                <td> ${data[i].email} </td>
                <td> ${data[i].total_points} </td>
              </tr>  `
              
        
          } 

        



      } 


       document.getElementById('data').innerHTML = output;
    }
      //  console.log(response.data);

      //  console.log(xhttp.responseText);

   
};
xhttp.open("GET", "data.json", true);
xhttp.send();
