let input = document.querySelector(".input");
        let addBtn = document.querySelector(".addBtn");
        let listContainer = document.querySelector(".list-container");
        let count = 0;

        addBtn.addEventListener("click", addTask);

        function addTask() {
            /*acessing p.taskCount and its child span tag*/
            let p = document.querySelector(".taskCount");
            let span = p.querySelector("span");

            /*creating dynamic  elements li and delete Button */
            let newListItem = document.createElement("li");
            let deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

            /*Displaying error message if user clicks add Button without enter any task as input*/
            if (input.value == 0) {
                let p = document.querySelector(".errorMsg");
                p.style.display = "block";
            }


            else if (input.value !== 0) {
                /* hiding error message when user clicks add button after inserting task in input field */
                let p = document.querySelector(".errorMsg");
                p.style.display = "none";

                /* assigning input field text to li */
                newListItem.innerText = input.value;
                input.value = "";
                listContainer.appendChild(newListItem);
                newListItem.appendChild(deleteBtn);

                /*tasks to complete increased by 1 every time a new task is added*/
                count++;
                span.innerText = count;
             
            }


            /*completed task becomes checked and linethrough*/
            newListItem.addEventListener("click", (e) => {
                newListItem.classList.toggle("complete");
                newListItem.classList.toggle("checked");
               
            });

            /*remove task*/
            deleteBtn.addEventListener("click", (e) => {
                newListItem.remove();

                /*tasks decreased by 1 every time a task is deleted*/
                count--;
                span.innerText = count;
              
            });
        };

       
