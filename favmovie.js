var list = document.getElementById('list');
        for(let i=0; i<localStorage.length; i++){
            const id = localStorage.key(i);
            const value = localStorage.getItem(id);
            list.innerHTML+='<div id="'+id+'" ><div class="f-movie" >'+value+'</div><button class="delete" onclick="removeMovie('+id+')">Delete</button></div';
            
        }
        function removeMovie(id){
            var key = id.getAttribute("id");
            localStorage.removeItem(key);
            location.reload();
            
        }