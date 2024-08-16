let vida = 0
let energia = 50

let inventario = []

let jogo = prompt("vamos começar o jogo! deseja iniciar?")

if(jogo === "sim") {
console.log("Começa o jogo.")
} else if(jogo === "não"){
console.log(alert("tchau, volte quando quiser."))
}


function historia () {
alert("seu nome é Darian Keletela, e voce nasceu no Congo, desde pequeno seu sonho foi virar um atleta de corrida, e sua maior habilidade era justamente correr!")
alert("neste jogo você passará por diversos momentos eletrizantes e deve manter o atleta vivo e faze-lo competir as olimpíadas de Paris 2024.")
}

function congo () {
    alert("neste momento seu país estava passando por muitas dificuldades, e voce junto de sua familia possui a opção de mudar de país para viver condições melhores. ")
}

function portugal (){
    alert("agora voce foi para o país Portugal, voce terá que sobreviver de acordo com a nova cultura, novas amizades e treinadores, até chegar nas olimpíadas 2024, fez a escolha certa. \nBoa sorte!")
}

function corridaTrilha () {
    alert("nova trilha em bosques do norte de Lisboa, capital de Portugal, será uma grande chance de todos verem seu talento!")
}

function ultimaCorrida (){
alert("depois de todos verem seu desempenho nas corridas até agora, você despertou atenção de alguns treinadores importantes no meio da corrida.")
alert("agora voce tera a corrida mais importante da sua vida, onde você terá que se impor e ganhar desta vez!")
alert("você começou suas competições muito bem, porém para ser convocado para as olimíadas precisa ter sangue de campeão! ter experiência e talento.")
alert("você irá correr com atletas de seu nível, que buscam a mesma vaga que você nas olimpíadas de Paris 2024")
alert("seu compromisso desta vez é ganhar esta competição e conquistar seu lugar no time de refugiados! e apresentar sua história motivadora ao mundo inteiro!")
alert("esta é sua chance, faça valer a pena!")
}

historia ()


congo ()

let quartocheck = true
while(quartocheck){
alert("aqui voce possui suas amizades e seu treinador para seguir seu sonho, mas pode passar fome e acabar morrendo.")
alert("voce pode mudar para Portugal, e terá melhores condições mas seu futuro será com bastantes incertezas.")
let escolha = Number (prompt("digite o número do país que voce deseja viver: \n1 Congo  \n 2 Portugal"))
if( escolha === 2){
    console.log("parabéns voce fez a escolha certa! Uma nova aventura repleta de novidades e desafios. \n Você ganhou o item coragem!")
    inventario.push("coragem")
    quartocheck = false
} else if (escolha === 1){
    console.log(alert("que pena, você irá passar por dificuldades demais no seu país escolhido, e não irá alcançar seu sonho. \nAbra o jogo novamente para continuar as proximas fases."))
}
}


portugal()
alert("aqui no novo país voce participará de uma competição de maratona pela sua nova escola, terá que fazer escolahas novas")
alert("a competição iniciou agora! é voce e mais 99 adversários. os melhores colocados no fim da competição continuarão concorrendo para as olimpíadas! Faça as ultrapassagens corretas e corra até o final!")
alert("estamos no meio da corrida! voce neste momento está em 5 lugar! não está sendo classificado, voce tem as escolhas de:")
let escolha2 = Number(prompt("\n1 Aumentar a velocidade agora, utilizando bastante energia.\n2 Continuar no mesmo ritmo e velocidade. \nEscolha por número a sua decisão:"))

if (escolha2 === 1) {
    energia -= 30
    vida += 10
    alert(`Você escolheu acelerar! Muito bem, ganhou 02 posições, mas gastou muita energia! Sua energia atual é de ${energia} e sua vida é de ${vida}.`)
    alert("A corrida terminou e você ficou em 3º lugar! Muito bem! Você ganhou a fama!")
    inventario.push("Fama")
}else if(escolha2 === 2) {
    energia -= 10
    vida -= 10
    alert(`Está bem! Sua escolha foi cautelosa, se manteve na mesma posição. Sua energia atual é ${energia} e sua vida é de ${vida}.`)
    alert("A corrida terminou e você acabou ficando na 5º posição!")
    }


let primeiroCheck = true;
while (primeiroCheck) { 
alert("acabou sua primeira corrida, você deve continuar treinando firme, para atingir seus objetivos.")
alert("seu próximo desafio será fazer uma trilha em Lisboa, na floresta cheia de descobertas e obstáculos perigosos, é você e mais 5 participantes!")
alert("esta corrida voce tem a opção de participar, faça sua escolha:")
let escolha3 = Number(prompt("voce deseja participar da corrida nos bosques de Lisboa? \n1 Sim. \n2 Não."))
if (escolha3 === 1){
    alert("Boa! baita escolha, voce aprimorará seus métodos de corrida! você ganhou confiança!")
    inventario.push("confiança")
    primeiroCheck = false;
} else if(escolha3 === 2){
    alert("Escolha errada, você deste jeito não entrará nas olimpíadas. Tente novamente.")
}
}


corridaTrilha()

alert("sua corrida começou! você deve acertar os caminhos sugeridos, pode encontrar atalhos, ou obstáculos que podem te ferir ou você entrará em um lado sem saída e terá que voltar.")
alert("você atualmente está na 03 colocação, terá de escolher se deseja ir para a direita, esquerda ou seguir em frente.")
let escolha4 = Number (prompt("deseja ir para onde? \n1 esquerda. \n2 direita. \n3 seguir reto."))
if (escolha4 === 1){
    energia -= 15
    vida -= 10
    alert(`você escolheu ir para o lado esquerdo, voce está na 02 posição, porém encontrou um obstáculo perigoso, voce atravessou um riacho e perdendo energia e vida, sua energia agora é de ${energia} e sua vida atual é de ${vida}. você ganhou machucados.`)
    inventario.push("Machucados")
} else if (escolha4 === 2){
    energia += 30
    vida += 15
    alert(`você escolheu ir para o lado direito, encontrou um atalho muito bom! Parabéns sua energia aumentou para ${energia} e sua vida para ${vida}, está na 01 posiçao neste momento!`)
} else if(escolha4 === 3){
    energia -= 20
    alert(`você escolheu seguir em frente, mas seu caminho escolhido é sem saída, terá que voltar para onde estava e perderá ${energia} de energia. ganhou preguiça.`)
    inventario.push("Preguiça")
}

alert(`a corrida terminou e voce ficou na posição de ${escolha4} lugar!`)


let segundocheck = true;
while(segundocheck){
alert("voce foi um dos melhores da corrida, parabéns! A imprensa quer falar com você!")
alert("tente ser o mais carismático possível, cuide suas respostas ás perguntas, podem prejudica-lo no futuro.")
let escolha5 = Number (prompt("você deseja participar da entrevista com a imprensa? \n1 sim. \n2 não."))
if(escolha5 === 1){
    alert("Ótima escolha! agora depende apenas de você! voce ganhou a habilidade de ser Conversador")
    inventario.push("Conversador")
    segundocheck = false;
} else if(escolha5 === 2){
    alert("pena! irá perder sua reputação, volte e tente novamente. você ganhou a habilida da vergonha.")
    inventario.push("Vergonha")
    
}
}


alert("reporter: \nOlá dorian! estamos acompanhando sua tragetória no esporte de atletismo, em Portugal!")
alert("reporter: \nO que você achou de sua performace na corrida de hoje?")

let escolha6 = Number (prompt("\n1 Minha corrida hoje foi espetacular, como vocês sabem vou me tornar o melhor do planeta, só não fiquei em 1º pois esse cara roubou!  \n2 Achei que minha corrida foi boa, mantenho a calma e humildade, pois só assim as coisas podem melhorar ainda mais!"))

alert("reporter: \nÓtimo, obrigado por responder, vamos para outra pergunta!")
alert("reporter: \nVocê se sente orgulho de onde veio, e de onde estás nesse momento? sabemos que foi difícil sua tragetória, gostaria de passar um recado de agradecimento a todos que lhe ajudaram a estar aqui hoje?")

let escolha7 = Number (prompt("\n1 Todos sabem de onde vim, que foi difícil, mas não precisei de ajuda de ninguém para chegar até aqui, ninguém me ajudou fiz tudo por merecer. \n2 Sim claro, vim de um lugar com uma situação bem complexa e precisei de muito apoio da minha família e amigos para estar aqui, alem de meu treinador lá do Congo, agradeço a tudo e todos que me ajudaram! sem palavras!"))
alert("reporter: \nÓtimo, obrigado por responder minhas perguntas, até uma próxima!")

ultimaCorrida()

alert("a corrida será feita no Egito, um polo da África, onde estão concentrados todos os atletas que buscam junto contigo a vaga para o campeonato.")
alert("sua corrida começa amanhã pela manhã, o dia vai estar lindo!")
alert("são 22 horas da noite, pense em  estar descansado e calmo para amanhã!")
let escolha8 = Number (prompt("escolha qual opção deixará você melhor para a última corrida: \n1 Dormir cedo, deixando eletrônicos de lado para esfriar a mente. \n2 Sair para festa no Egito esta noite para conhecer as linda egípcias. \n3 Ir fazer um tour pelas pirâmides do Egito e conhecer as belas cidades do país."))

if (escolha8 === 1){
    energia += 20
    vida += 15
    alert(`ótima escolha! voce estará preparado para a corrida amanhã! sua energia é de ${energia} e sua vida atual é ${vida}.`)
} else if(escolha8 === 2){
    energia -= 10
    vida -= 10
    alert(`opção perigosa, corre risco de não competir as olimpíadas!sua energia é de ${energia} e sua vida atual é ${vida}.`)
}else if(escolha8 === 3){
    energia -= 15
    vida += 5
    alert(`você com esta opção corre risco ainda, deve se preocupar com sua saúde para a corrida! sua energia é de ${energia} e sua vida atual é ${vida}. ganhou a habilidade de viajante e de descompromissado.`)
    inventario.push ("Viajante")
    inventario.push ("Descompromissado")   
}


alert("A corrida começa agora! você foi pego de surpresa e terá que correr pelas areias do deserto, faz 35º Graus! você tem que se hidratar bastante, Boa Corrida!")
alert("você está concorrendo a apenas uma vaga para participar das olimpíadas, são 10 atletas participando, estamos com você!")
alert("seu treinador está lhe orientando sobre os caminhos complicados de correr no deserto.")

let escolha9 = Number (prompt("voce tem a escolha de: \n1 escutar e compreender seu treinador, fazendo o que ele realmente está lhe orientando. \n2 Apenas ignorar as falas dele, e fazer por voce mesmo. "))
if(escolha9 === 1){
    vida += 10
    alert(`você fez a escolha certa, ouvir seu treinador experiente é a melhor opção, com certeza irá te ajudar na corrida! sua vida atual é ${vida}.`)
} else if(escolha9 === 2){
    vida -= 10
    alert(`está escolha corre o risco de você perder o campeonato e colocar sua vaga das olimpíadas em risco, sua vida atual é ${vida}. ganhou a habilidade de ignorância.`)
}


alert("A CORRIDA COMEÇOU!")
alert("você percebeu que seu adversário ao lado está trapaceando, levando escondido uma garrafa da água para correr, o que é proibido.")
let escolha10 = Number (prompt("deseja dedurar seu oponente para os juízes da corrida? \n1 Sim. \n2 Não."))

alert("agora você vê um de seus adversários se perdendo nas linhas da corrida.")
let escolha11 = Number (prompt("você deseja ajudar seu adversário a reencontrar seu caminho na corrida? \n1 Sim. \n2 Não."))

if(escolha11 === 1){
    vida += 5
    energia -= 15
    alert(`sua escolha de ajudar seu adversário foi bastante legal, porém pode causar consequências na sua posição da corrida atualmente, sua energia é de ${energia} e sua vida atual é ${vida}. ganhou habilidade de amigável`)
    inventario.push("Amigável") 
}else if(escolha11 === 2){
    vida += 15
    alert(`sua escolha não atrapalhou sua corrida, mas acabou desqualificando seu adversário. continue assim, sua vida atual é ${vida}.`)
}


alert(" PARABÉNSSSS A CORRIDA ACABOU, VOCÊ GANHOU ESTA COMPETIÇÃO!")
alert("agora voce entrará numa disputa com outro oponente que teve desempenhos muito satisfatórios em outras corridas, os judados e juízes farão a decisão.")

let terceirocheck = true
while(terceirocheck){
if (vida += 50 && energia >= 50) {
    alert("parabens! conseguiu um feito incrível! voce foi convocado para jogar as olimpíadas!")
    terceirocheck = false
} else if(vida -= 49 && energia < 50){
    alert("Que pena! de acordo com suas competências em seus desafios, voce não foi convocado para jogar as olimpiadas, mas valeu o esforço!")
}
}


