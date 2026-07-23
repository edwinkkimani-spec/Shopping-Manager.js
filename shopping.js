//Create a shopping list
let shoppinglist=["Bread" ,"Eggs", "Milk" ,"Sugar","Apples"]
function displayitems(){
    shoppinglist.forEach(function(item) {
        console.log("Item in the list " + item)
    });//let was used to create a varuable.
    //For was used as a loop to repeat a block of code./const was to declare the varuable.
 }
        
     //This function displays all items in the shopping list.
     function addItem(item){
     shoppinglist.push(item);
     //push was used to add "Tea"/(From bottom).
}
    //This function adds an item
    addItem("Tea")
    //(Shows all items in the array)
          
   //This Function removes items
   function removeItem(item){
    shoppinglist.splice(3,1)
} //splice is used to remove a specific item inside an array.
//The 1 indicates the No. of items to be removed
        removeItem("3,1");
        
     //To call a function, you must use parentheses directly after the name without an equals sign: 
    //Shift doesn't take an argument.
    //Shift removes fist item in a list.
      
    //lowercase to avoid typos.
    //This function is used to search.
      function searchItem(item){
         const index = item.indexOf(item);
    //Why are we using If/else.
    //Bc the computer needs to make a decision based on whether the item is there or not.
    if (index !== -1) {
        //index:Stores the item's numerical location in the array.
        //!:invert or flip a true/false value.
        //!== -1:Varuable on left Not equal to value on right.
        console.log(item + " exists in the list at index " + index + ".");
    } else {
        console.log(item+ "item not found")
    }           
}
      searchItem("Apples")
      searchItem("Sugar")
    
      //const was used to declare a variable while console.log was used to display output.
     const item= ["Bread","Eggs","Milk","Sugar","Apples", "Tea"];
     console.log(shoppinglist.length)
     //We have used const to declare the varuable Items.
     //Console.log is for checking the Array and also debuging.
 
      //Use an array method to create a new array containing only the first 3 items.
       const originallist=["Bread","Eggs","Milk","Sugar","Apples", "Tea"]
       const prioritylist=shoppinglist.slice(0,3);
        //We could not have used shoppinglist as our identifier bc it was already declared.
        //We used const to declare.
        //We checked the array using console.log.
        console.log(prioritylist);






    //Call each function at least once and show the output.
    1;    // Function to display items
      function displayitems() {
    shoppinglist.forEach(function(item){
        console.log("Item in the list " + item);
    });
}
              displayitems()//Used to call



           //function addItem(item)  
             function addItem(item) {
        shoppinglist.push(item);
}

          addItem("Tea")//Used to call added item




      function removeItem(item) {
    shoppinglist.splice(3, 1); // Removes 1 item at index 3 ("Sugar")
    
  }
         removeItem(3,1)//To call




      //Used this function to search and output data.
        function searchItem(item) {
      const index = shoppinglist.indexOf(item);
       if (index !== -1) {
        console.log(item + " exists in the list at index " + index + ".");
    } else {
        console.log( item + "item not found");
     
    }
}
       searchItem("Sugar")
       searchItem("Tea")//Exist

  
           //Used this function to determine number of items.
           console.log(shoppinglist.length) //To Call

              //Used this function to determine give priority to the first three items.
              console.log(prioritylist);//To call



   //Test the program
   //displayitems();
   //addItem("Tea");
   //removeItem("Sugar");//(index 3,1)
   //searchItem("Apples")
   //searchItem("Tea")
   