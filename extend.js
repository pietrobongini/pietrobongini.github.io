/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var extended_elements = []
function extend(clicked_id) {
   //if (extended_elements.length != 0) {
    //   for (let i = 0, len = extended_elements.length; i < len; i++)
     //  delete extended_elements[i]}
    var id = clicked_id.charAt(clicked_id.length -1);
    var text = "divpaper"
    var visible_id = text.concat(id)
    console.log(visible_id)
    if (document.getElementById(visible_id).style.display == 'block'){
         document.getElementById(visible_id).style.setProperty('display', 'none', 'important')}
    else{
    document.getElementById(visible_id).style.setProperty('display', 'block', 'important');
    }
}
