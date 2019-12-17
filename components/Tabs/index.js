// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



axios
.get(`https://lambda-times-backend.herokuapp.com/topics`)
 .then((res) => {
  const dataContent = res.data.topics;
  console.log(dataContent);

       //component
       topics = document.querySelector('.topics');
       newTab = document.createElement('div');
    
       //classlist
       newTab.classList.add('tab');
    
        //append
         topics.appendChild(newTab);
    
       //content
       newTab.textContent = dataContent;
    
        console.log(topics);

    return newTab;
});


  