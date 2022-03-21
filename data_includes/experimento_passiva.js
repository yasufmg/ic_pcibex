PennController.ResetPrefix(null);

Sequence("consentimento", "instrucoes", "treino", randomize("experimento"), SendResults(), "final"); /// Sequencia do experimento

Header(
  
  defaultText /// Fonte do experimento
         .css("font-size", "1.2em"
         .print()
         ,
         
  defaultTextInput
         .css("font-size", "1.2em")
         .print()
         ,
         
  defaultButton /// Formato do botão
         .css("font-size", "1.2em"
         .print()
         .center() /// Centraliza o botao
         .wait() /// Pausa o experimento até que o participante clique no botão

)

newTrial("consentimento",
              
  newText("<p>Prezado participante,</p>")
,
  newText("<p>Você está sendo convidado(a) a participar da pesquisa XXXXXXXXX, desenvolvida por XXX, discente de XXXXX em XXXXXX da Universidade XXXXXXXX, sob orientação do Professor Dr. XXXXXX”. O objetivo central do estudo é: XXXXXXXXXXXXXXX.</p>")
,
  newText("<p>Nesta pesquisa, você será solicitado a avaliar x sentenças em critérios de aceitabilidade ou inaceitabilidade no português brasileiro, de acordo com uma escala de 1 a 10, em que 1 significa INACEITÁVEL na língua e 10 significa ACEITÁVEL na língua.</p>")
,
  newText("<p>Sua participação é voluntária e você não será penalizado de nenhuma maneira caso decida não consentir sua participação.</p>")
,

              
              
newScale("slider",   100)
    .slider()
    .print()
