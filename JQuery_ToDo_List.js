$(document).ready(function(){ 

    var my_list = $("#ul1");        // get ulist by id 

    $("#btnn").click(function(event){     // event on button when clicked
        
        event.preventDefault(); 

        var mform = $("#My_ToDo")[0] ,      // get form by id
            flag  = true,              
 	        input = $("#Text1")[0].value ;    // get text value by id

	        input = input.trim();         // to trim spaces 

    	if(input==""){       // if the user tried to enter an empty text
            alert("please, enter your Item ......");        // alert him that it is empty
            flag = false;       
        }

        for(var i = 0; i < my_list.children().length; i++){       // loop on the list of items
            if (my_list.children()[i].innerHTML == input) {      // if item is exists
                alert ("Item exists try an other item .......");    // do not add 
                flag = false;
            }
        }

        if(flag==true) {
            var NewElem = $('<li />')[0];   // create element   'li'
            NewElem.append(input);          // append Element + Input 

            $('#ul1')[0].append(NewElem);     // append ulist + Element 
        }

        $(NewElem).on("click", function() {       // when click an element ask if confirmed        
            var remove_item = confirm("Item will be deleted ..... Are you sure you want to delete it ??");
            if(remove_item == true) {    // if confirm deletion
                $(this).remove();   // remove the clicked element
            }
        });
    });


    $("#btnn2").on("click",function(event){     // if user want to empty the whole list
        event.preventDefault();
        var empty_list = confirm("Are you sure you want to empty the list ??");
        if(empty_list == true) {    // if confirm empty
            $('#ul1').html("");     // empty the whole Items
        }
    });

});