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

mail=$('#mail').val()
        
$('#form').submit(function(e){
    
    if ($('#mailm').val()===$('#mailc').val()) {
        e.preventDefault();
    alert('Attention vous ne pouvez pas selectioner le meme fichier pour la lettre de motivation et le CV')
    }
    
    
})

/**************VERIFICATION SI L'INPUT DE L'ADRESSE MAIL EST VIDE OU SI IL MANQUE DES CARACTERE DANS L'INPUT**************/

$('#mail').blur(function(e){
    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    
    let emailaddressVal = $(this).val();
    
        if(emailaddressVal == '') {
            e.preventDefault();
            alert('L\'adresse mail est vide.');
            
        } 
        e.preventDefault();
         if(!emailReg.test(emailaddressVal)) {
            e.preventDefault();
            alert(emailaddressVal+' '+' n\'est pas une adresse mail correcte');
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