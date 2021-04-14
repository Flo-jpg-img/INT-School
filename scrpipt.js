console.log('ok')
/**************DEBUT DU PROGRAMME******************************************/


/**************AFFICHAGE D'UN MESSAGE AU FOCUS DE L'INPUT NOM ET AJOUT DE LA CLASSE BORDER1**************/

$('#nom').focus(function(){
    
    $('#aidenom').text('Veuillez entrer votre nom de famille')
    $('#aidenom').addClass("border1")
    
})

/**************SUPPRESION DU MESSAGE AU BLUR DE L'INPUT NOM ET SUPPRESSION DE LA CLASSE BORDER1**************/

$('#nom').blur(function(){
    $('#aidenom').removeClass("border1")
    $('#aidenom').text('')
    
})


/**************AFFICHAGE D'UN MESSAGE AU FOCUS DE L'INPUT NOM ET AJOUT DE LA CLASSE BORDER1**************/
$('#prenom').focus(function(){
    
    $('#aideprenom').text('Veuillez entrer TOUT vos prenom')
    $('#aideprenom').addClass("border1")
    
})


/**************SUPPRESION DU MESSAGE AU BLUR DE L'INPUT NOM ET SUPPRESSION DE LA CLASSE BORDER1**************/

$('#prenom').blur(function(){
    $('#aideprenom').removeClass("border1")
    $('#aideprenom').text('')
    
})


/**************VERIFICATION SI LES FICHIERS CHOISIS SONT LE MEME ? SI C'EST LES MEME->ALERT**************/



$('#form').submit(function(e){
    
    if($('#nom' ).val()== '') {
        e.preventDefault();
        $('#nom').addClass("border1")
        alert('Veuillez écrire votre nom ');
        
    }
    if($('#prenom' ).val()== '') {
        e.preventDefault();
        $('#prenom').addClass("border1")
        alert('Veuillez écrire votre prenom');
        
    }
    if($('#mailm' ).val()== '') {
        e.preventDefault();
        $('#mailm').addClass("border1")
        alert('Veuillez selectionner un fichier pour votre lettre de motivation ');
        
    }
    if($('#mailc' ).val()== '') {
        e.preventDefault();
        $('#mailc').addClass("border1")
        alert('Veuillez selectionner un fichier pour votre CV ');
        
    }else{
        if ($('#mailm').val()===$('#mailc').val()) {
            e.preventDefault();
        alert('Attention vous ne pouvez pas selectioner le meme fichier pour la lettre de motivation et le CV')
        }
    }

    $('input,select, email').on("invalid", function(e) {
        e.preventDefault();
    }); 

    let emailReg = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
        
    let emailaddressVal = $('#mail').val();
     
    if(emailaddressVal == '') {
        e.preventDefault();
        $('#mail').addClass("border1")
        alert('Veuillez entrez votre adresse mail.');
        console.log('vide')
    } else if(!(emailReg).test(emailaddressVal)) {
        e.preventDefault();
        $('#mail').addClass("border1")
        alert(emailaddressVal+" "+' n\'est pas une adresse email');
        console.log('mauvais')
    } else{
        
        $('#mail').removeClass("border1")
        console.log('mopfd')
    }
    
   
    
})





/**************VERIFICATION SI L'INPUT DE L'ADRESSE MAIL EST VIDE OU SI IL MANQUE DES CARACTERE DANS L'INPUT AU BLUR**************/


    



   /**************VERIFICATION SI L'UTILISATEUR ENTRE DES NOMBRE DANS L'INPUT PRENOM OU NOM**************/


$('#nom').blur(function(){

    if ($.isNumeric($('#nom').val())) {
        alert('Nous ne pouvez pas mettre de nombre dans votre nom');
    } 
})

$('#prenom').blur(function(){

if ($.isNumeric($('#prenom').val())) {
    alert('Nous ne pouvez pas mettre de nombre dans votre prenom');
} 

})