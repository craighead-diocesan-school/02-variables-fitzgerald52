// ####################################
// #### ----- Life Remaining ----- ####
// ####################################

function lifeRemaining() {
  let age =prompt( 'How old are you ?')
  let lifeexpectancy = 83.5
  let timeleft = lifeexpectancy - age
  alert(' you have got ' + timeleft + ' years left in you')
}