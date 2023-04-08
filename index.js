 const studentOne = ["Gabriel",9.3,5]
 const studentTwo = ["Michel",2,5]
 const studentThree = ["Catarina",7,7]

 function media(noteOne,noteTwo){
  return (noteOne + noteTwo)/2
 }

 function approved(media,name){
  return media >= 7 ? `Parabens ${name} você foi aprovado.` : `Sinto muito ${name} você não passou , porem não desanime tente novamente .`
 }
//Aluno 1
 alert(`${studentOne[0]} sua media foi : ${media(studentOne[1],studentOne[2]).toFixed(2)}
${approved(media(studentOne[1],studentOne[2]).toFixed(2),studentOne[0])}`)
 //Aluno 2
alert(`${studentTwo[0]} sua media foi : ${media(studentTwo[1],studentTwo[2]).toFixed(2)}
${approved(media(studentTwo[1],studentTwo[2]).toFixed(2),studentTwo[0])}`)
//Aluno 3
alert(`${studentThree[0]} sua media foi : ${media(studentThree[1],studentThree[2]).toFixed(2)}
${approved(media(studentThree[1],studentThree[2]).toFixed(2),studentThree[0])}`)