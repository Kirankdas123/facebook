$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
            required:true,
                minlength:4,
                maxlength:8

        },
        sname:{
            required:true,
            minlength:4,
            maxlength:8
        },
        emailAdress:{
            required:true,
            email:true
        },
        gen:{
            required:true
        }
       
    },messages:{
        fname:{
            required:"Enter your First Name",
            minlength:"Minumum 4 chr Required"
        }

    }
    })
})
