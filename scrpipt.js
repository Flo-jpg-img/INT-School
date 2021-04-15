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



/**************VERIFICATION AU SUBLIT DU FORMULAIRE**************/


$('#form').submit(function(e){
    
    if($('#nom' ).val()== '') {
        /**************VERIFICATION SI L'INPUT NOM EST VIDE->ALERT**************/

        e.preventDefault();
        $('#nom').addClass("border1")
        alert('Veuillez écrire votre nom ');
        
    }

    if($('#prenom' ).val()== '') {
                /**************VERIFICATION SI L'INPUT PRENOM EST VIDE->ALERT**************/

        e.preventDefault();
        $('#prenom').addClass("border1")
        alert('Veuillez écrire votre prenom');
        
    }

    if($('#mailm' ).val()== '') {
                /**************VERIFICATION SI L'INPUT LETTRE DE MOTIVATION EST VIDE->ALERT**************/

        e.preventDefault();
        $('#mailm').addClass("border1")
        alert('Veuillez sélectionner un fichier pour votre lettre de motivation ');
        
    }

    if($('#mailc' ).val()== '') {
                /**************VERIFICATION SI L'INPUT CV EST VIDE->ALERT**************/

        e.preventDefault();
        $('#mailc').addClass("border1")
        alert('Veuillez sélectionner un fichier pour votre CV ');
        
    }else{
        /**************VERIFICATION SI LES FICHIERS CHOISIS SONT LE MEME ? SI C'EST LES MEME->ALERT**************/

        if ($('#mailm').val()===$('#mailc').val()) {
            e.preventDefault();
        alert('Attention vous ne pouvez pas sélectioner le même fichier pour la lettre de motivation et le CV')
        }
    }

        /**************BLOCAGE DU MESSAGE AUTOMATIQUE DU NAVIGATEUR POUR AFFICHER L'ALERT A LA PLACE**************/

    $('input,select, email').on("invalid", function(e) {
        e.preventDefault();
    }); 


        /**************VERIFICATIONS POUR L'INPUT EMAIL**************/
    let emailReg = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;  
    let emailaddressVal = $('#mail').val();

    if(emailaddressVal == '') {
    /**************VERIFICATION SI L'INPUT MAIL EST VIDE->ALERT**************/
        e.preventDefault();
        $('#mail').addClass("border1")
        alert('Veuillez entrez votre adresse mail.');
        /*console.log('vide')*/
    } else if(!(emailReg).test(emailaddressVal)) {

     /**************VERIFICATION SI L'INPUT MAIL CORRESPOND BIEN AU REG->ALERT**************/
        e.preventDefault();
        $('#mail').addClass("border1")
        alert(emailaddressVal+" "+' n\'est pas une adresse email valide!');
        /*console.log('mauvais')*/
    } else{

     /**************VERIFICATION SI OK->ENVOIS FORMULAIRE**************/
        $('#mail').removeClass("border1")
        /*console.log('mopfd')*/
    }
    
   
    
})

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