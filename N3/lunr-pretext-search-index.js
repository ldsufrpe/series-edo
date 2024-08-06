var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-1",
  "level": "1",
  "url": "frontmatter-1.html",
  "type": "Pré-textual",
  "number": "",
  "title": "Pré-textual",
  "body": "   Leon Silva  Departamento de Matemática  Universidade Federal Rural de Pernambuco        Aqui faremos um resumo das atividades da semana .   "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Seção",
  "number": "1",
  "title": "Testes de Convergência",
  "body": " Testes de Convergência   É muito comum encontrar séries para as quais é difícil, ou mesmo praticamente impossível, determinar soma de forma exata. Muitas vezes tenta-se avaliar a soma por aproximação truncando-a, ou seja, fazendo com que o índice seja executado apenas até algum valor finito , ao invés de infinito. Entratanto, não faz sentido fazê-lo se a série for divergênte. Potanto, se torna interessante saber se a série converge ou não. Além disso, também é importantante saber qual é o erro quando aproximamos pela série truncada  . Isso é chamado de erro de truncamento.    Teste da Divergência  Nosso primeiro teste basea-se na constatação de que  por definição, uma série converge para quando as somas parciais converge para .  Então, como , temos e, pois temos também .  Logo .  Isso nos diz que, se já sabemos que uma dada série, é convergente, então - ésimo termo da série, , deve convergir para quando tende ao infinito. Nesta forma, o teste não é tão útil. No entanto, a contrapositiva é um teste útil para divergência .   Teste da Divergência   Se a sequência não converge para zero , tentão a série diverge.     Uma série divergente   A série é divergente.    Seja . Então Assim a série diverge.      O teste de divergência é um teste de sentido único . Afirma que não é zero, ou não existe, então a série diverge. Mas não diz absolutamente nada quando . Em particular, é perfeitamente possível que uma série  divergir embora . A série é um exemplo disto. Mostraremos no , que ela diverge.    Agora, enquanto a convergência ou divergência de séries como pode ser determinado usando alguns truques. Nas próximas subseções, discutiremos vários métodos para testar a convergência de séries.  Observe que, embora esses testes nos digam se uma série converge ou não, eles não (exceto em casos raros) determinam qual é a soma da série. Por exemplo, o teste que veremos na próxima subseção verifica que a série converge. No entanto, não calcula seu valor.    Teste da Integral  No teste da integral, pensamos em uma série , que não podemos avaliar explicitamente, como a área de uma união de retângulos, com representando a área de um retângulo de largura um e altura . Então comparamos essa área com a área representada por uma integral, que podemos avaliar explicitamente. Começaremos com um exemplo simples, para ilustrar a ideia. Em seguida, passaremos a uma formulação do teste em geral.   Convergência da série harmônica  Visualize os termos da série harmônica como um gráfico de barras cada termo é um retângulo de altura e largura . O limite da série é então a área limite desta união de retângulos.       Considere o esboço à esquerda da . Isto mostra que a área das colunas sombreadas, , é maior que a área sob a curva com . Ou seja Se continuássemos desenhando as colunas infinitamente, teríamos Podemos calcular exatamente essa integral imprópria: Ou seja, a área sob a curva diverge para e, portanto, a área representada pelas colunas também deve divergir para .  Deve ficar claro que o argumento acima pode ser facilmente generalizado. Por exemplo, o mesmo argumento vale para a série De fato, vemos à direita da que e, portanto Esta última integral imprópria é fácil de calcular: Assim sabemos que e assim a série deve convergir.   Os argumentos acima são formalizados no seguinte teorema.   Teste da Integral   Seja qualquer número natural. Se for uma função definida e contínua para todo e que obedece   para todo e   diminui à medida que aumenta e   para todo .       Então Além disso, quando a série converge, o erro de truncamento é      Seja qualquer inteiro fixo com . Então   converge se e somente se converge remover um número finito fixo de termos de uma série não pode afetar se ela converge ou não.  Como para todo , a sequência de somas parciais obedece . Ou seja, aumenta à medida que aumenta.  Portanto, deve convergir para algum número finito ou aumentar para infinito. Ou seja, converge para um número finito ou é .         A área sombreada na é pois  o primeiro retângulo sombreado tem altura e largura e, portanto, área e  o segundo retângulo sombreado tem altura e largura e, portanto, área e assim por diante  Essa área sombreada é menor que a área sob a curva para . Então e, se a integral for finita, a soma também será finita. Além disso, o limite desejado no erro de truncamento é apenas o caso especial desta desigualdade com :        Para o caso de divergência veja a . A (nova) área sombreada na figura é novamente porque  o primeiro retângulo sombreado tem altura e largura e, portanto, área e  o segundo retângulo sombreado tem altura e largura e, portanto, área e assim por diante  Desta vez, a área sombreada é maior que a área sob a curva para . Então e, se a integral for infinita, a soma também será infinita.   Agora que temos o teste da integral, é simples determinar para quais valores de a série converge.   O -teste:   Seja . Agora usaremos o teste da integral para determinar se a série (que às vezes é chamada de -series) converge.  Para isso, precisamos de uma função que obedeça para todo maior que algum . Certamente obedece para todo . Então, vamos escolher este e tentar . (Podemos sempre aumentar , se for necessário.)   Esta função também obedece às outras duas condições do :   para todo e   descrece à medida que cresce já que para todo .     Portanto, o teste da integral nos diz que a série converge se e somente se a integral converge.  Sabemos que a integral converge se somente se .  Portanto, concluímos que converge se e somente se . Este às vezes é chamado de -teste.  Em particular, a série , que é chamada de série harmônica, tem e assim diverge. À medida que adicionamos mais e mais termos dessa série, os termos que adicionamos, a saber, , ficam cada vez menores e tendem a zero, mas tendem a zero muito lentamente que a soma total ainda é infinita.  Por outro lado, a série tem e assim converge. Desta vez, à medida que adicionamos mais termos desta série, os termos que adicionamos, a saber, , tendem a zero (apenas) rápido o suficiente para que soma total seja finita. Lembre-se, para este exemplo, a convergência ocorre muito lentamente é necessário pegar um grande número de termos para obter uma aproximação decente da soma total. Se aproximarmos pela série truncada , cometemos um erro de no máximo Isso tende a zero quando , mas muito lentamente.     Agora sabemos que a linha divisória entre convergência e divergência de ocorre em . Podemos ir um pouco mais a fundo e perguntar quanto mais rápido do que o -ésimo precisa diminuir para que a série convirja. Sabemos que para grandes valores para , a função é menor que para qualquer  para se convencer disso basta aplicar da regra de L'Hôpital. Portanto, não é irracional perguntar se a série converge. Observe que somamos de porque quando . Podemos analisar a convergência dessa soma com qualquer potência de .      Seja . Agora usaremos o teste integral para determinar se a série converge.  Como no último exemplo, começamos escolhendo uma função que obedece para todo maior que algum . Certamente obedece para todo . Então, vamos usar esse e tentar .   Agora vamos verificar as outras duas condições do :  Tanto quanto são positivos para todo , então para todo .  À medida que aumenta, e aumentam e, portanto, aumenta e diminui.     Assim, o teste integral nos diz que a série converge se e somente se a integral converge.  Para testar a convergência da integral, fazemos a substituição , . Já sabemos que a integral é a integral e, portanto, a integral , converge se e somente se .  Portanto, concluímos que converge se e somente se .     Teste da Comparação  Nosso próximo teste de convergência é o teste de comparação. É muito parecido com o teste de comparação para integrais impróprias e é válido pelas mesmas razões. A ideia aproximada é bastante simples. Uma soma de termos maiores deve ser maior que uma soma de termos menores. Então, se sabemos que a grande soma converge, a pequena soma também deve convergir. Por outro lado, se sabemos que a pequena soma diverge, a grande soma também deve divergir. A formalização dessa ideia fornece o seguinte teorema.   Teste da Comparação   Seja um número natural e seja .  Se para todo e converge, então converge.  Se para todo e diverge, então diverge.        Demonstração   Não Demonstraremos este teorema aqui. Vamos apenas fazer algumas observações. É por isso que existem aspas em Demonstração . Para uma prova real veja a seção opcional .  Se converge para um número finito e se os termos em são menores que os termos em , então não é surpresa que também converge.  Se diverge (ou seja, tende ao ) e se os termos em são maiores que os termos em , então obviamente tende ao , e assim também diverge.     O teste de comparação para séries também é usado da mesma maneira que o teste de comparação para integrais impróprias. Claro, é preciso uma boa série para comparar, e muitas vezes a série (do  ), para algum , é a escolhida.      Poderíamos determinar se a série converge aplicando o teste da integral. Mas não vale o esforço. A convergência ou não de qualquer série é determinada pelo comportamento da soma para muito grande. Portanto, o primeiro passo para lidar com esse problema é desenvolver alguma intuição sobre o comportamento de quando for muito grande.   Passo 1: Neste caso, quando for muito grande O símbolo   significa muito maior que . Da mesma forma, o símbolo   significa muito menos que . Bons símbolos taquigráficos podem ser bastante expressivos.  para que . Já sabemos, do , que converge se e somente se . Portanto, , que tem , converge, e esperamos que convirja também.   Passo 2: Podemos usar o teste de comparação para confirmar que esse é realmente o caso. Para qualquer , , de modo que . Então o teste de comparação, , com e , nos diz que converge.     O exemplo anterior foi manipulado para facilitar a aplicação do teste de comparação. Geralmente é relativamente fácil, usando argumentos como aqueles no , encontrar uma série simples  com quase igual a quando é grande. No entanto, é muito raro que para todo . É muito mais comum que para alguma constante . Isso é suficiente para permitir a aplicação do teste da comparação. A seguir um exemplo.      Como no exemplo anterior, o primeiro passo é desenvolver alguma intuição sobre o comportamento de quando for muito grande.    Passo 1: Quando é muito grande,   temos e   temos .  Assim quando é muito grande Já sabemos do , com , que converge, então esperamos que convirja também     Passo 2: Podemos usar o teste de comparação para confirmar que esse é realmente o caso. Para fazer isso, precisamos encontrar uma constante tal que é menor que para todo . Uma boa maneira Semelhante a como calculamos os limites no infinito. para fazer isso é fatorar o termo dominante (neste caso ) do numerador e também fatorar o termo dominante (neste caso ) do denominador. Então agora precisamos encontrar uma constante de tal forma que seja menor que para todo .   Primeiro considere o numerador . Para todo    e     Assim o numerador é sempre menor que .    Em seguida, considere o denominador .  Quando , encontra-se entre e de modo a   está entre e e cosequentemente   está entre e .     Como o numerador é sempre menor que e é sempre menor que , a fração   Agora sabemos que e, já que converge, pelo teste da comparação converge.      O último exemplo foi na verdade uma aplicação relativamente simples do teorema de comparação encontrar uma constante adequada pode ser realmente complicado. Existe uma variante do teste de comparação que elimina a necessidade de encontrar explicitamente .  A ideia por trás disso não é muito complicada. Já vimos que a convergência ou divergência de uma série não depende dos primeiros termos, mas apenas do que acontece quando é realmente grande. Consequentemente, se pudermos descobrir como os termos da série se comportam para realmente grande, podemos descobrir se a série converge. Então, em vez de comparar os termos da série para todo , apenas compare-os quando for grande.   Teste da Comparação do Limite   Seja e duas séries com para todo . Assuma que existe.  Se converge, então também converge.  Se e diverge, então também diverge.  Em particular, se , então converge se e somente se converge.     (a) Como , sabemos que,  quando é grande, fica muito próximo de , então está próximo de .  Em particular, existe algum número natural para que , para todo e, portanto,   com , para todo .   implica que converge.    (b) Vamos supor que . (Se , basta substituir por .) Já que , sabemos que,  quando é grande, está muito próximo de .  Em particular, existe algum número natural para que e, portanto,   com , para todo .   implica que diverge.     Os próximos dois exemplos ilustram o desempenho do teorema acima em relação ao teste de comparação direta (embora, é claro, precisássemos do teste de comparação para desenvolver o teste da comparação do limite).      Defina . Primeiro tentamos desenvolver alguma intuição sobre o comportamento de para grande e confirmamos que a intuição esá correta.   Passo 1: Intuição. Quando , o numerador e o denominador para que e pelo , com , a série converge.   Passo 2: Confirmando a intuição. Para confirmar a intuição, definimos e calculamos o limite Novamente, é uma boa ideia fatorar o termo dominante do numerador e o termo dominante do denominador. Já sabemos que a série converge pelo como . Então a série converge pelo teste de comparação de limite, .      , novamente  Também podemos tentar lidar com a série de , usando o teste de comparação diretamente. Mas isso exige que encontremos para que Podemos fazer isso examinando o numerador e o denominador separadamente:  O numerador não é razoável, pois para todo :   O denominador é um pouco mais complicado, pois precisamos de um limite inferior , em vez de um limite superior, e não podemos simplesmente escrever , que é falso. Em vez disso, temos que fazer um argumento mais cuidadoso. Em particular, gostaríamos de encontrar e para que , ou seja, para todo . Para , temos . Portanto, para ,   Juntando o numerador e o denominador temos e o teste de comparação garante que a série converge. É bastante claro que a abordagem do foi muito mais direto.     Sugestão de Vídeos     Teste do n-ésimo termo para divergência      Sobre o Teste da Integral      Exemplo resolvido: Teste da integral      Exemplo resolvido: -série      Prova dos critérios de convergência para -série      Sobre o Teste da Comparação      Exemplo resolvido: Teste da Comparação      Teste da Comparação do Limite      Exemplo Resolvido: Teste da Comparação do Limite      Série Hamônica diverge       Teste da Série Alternada  Quando os sinais de termos sucessivos em uma série alternam entre e , como por exemplo em , a série é chamada de série alternada . Mais geralmente, a série se cada for positivo. Muitas vezes (mas nem sempre) os termos em séries alternadas ficam sucessivamente menores. Ou seja, . Neste caso:  A primeira soma parcial é .  A segunga soma parcial, , é menor que por .  A terceira soma parcial, , é maior que por , pois , permanece menor do que . Veja a   A quarta soma parcial, , é menor que por , já que , contua maior que . Novamente, veja a .  E assim por diante  Assim, as sucessivas somas parciais oscilam, mas com amplitude cada vez menor. Se, além disso, tende a quando tende a , a amplitude de oscilação tende a zero e a sequência , , , converge para algum limite .  Isso é ilustrado na figura       A seguir está um teste de convergência para séries alternadas que explora essa estrutura e é muito fácil de aplicar.   Teste da Série Alternada   Seja ser uma sequência de números reais que satisfaz   para todo e   para todo (ou seja, a sequência é monótona decrescente) e   .  Então converge e, para cada número natural , está entre e (o primeiro termo descartado) . Aqui é, como anteriormente, a -ésima soma parcial .                                                                                    Convergência da série harmônica alternada  Vimos que, no , que a série harmônica diverge. Por outro lado, a serie converge pelo com . Observe:   para todo , de modo que é uma série alternada, e   decresce quando cresce, e   .  Assim todas as hipóteses do , são todas satisfeitas.      Escreva . A série é alternada, mas Assim, a condição não é satisfeita. Em vez disso, olhamos para o limite do -enésimo termo da série: Este limite não existe, logo a séire é divergente pelo .    Teste da Razão  A ideia por trás do teste da razão vem de um reexame da série geométrica. Lembre-se que a série geométrica converge quando e diverge caso contrário. Assim, a convergência desta série é completamente determinada pelo número . Este número é apenas a razão de termos sucessivos isto é .  Em geral, a razão de termos sucessivos de uma série, , não é constante, mas depende de . No entanto, como observamos acima, a convergência de uma série é determinada pelo comportamento dos seus termos quando é grande. Desta forma, o comportamento desta razão quando é pequeno não fornece nada sobre a convergência da série, mas o limite da razão quando . Esta é a base do teste de razão.   Teste da Razão   Seja um inteiro positivo qualquer e assuma que para todo .  Se , então converge.  Se , ou , então diverge.        Observe que o teste da razão não fornece absolutamente nenhuma conclusão sobre a convergência ou divergência da série se . Como mostra o , mais adiante.     (a) Escolha um número qualquer satisfazendo . Assumindo que se aproxima de quando . Em particular, existe algum número natural tal que para todo . Então para todo . Em particular para todo . A série é uma série geométrica com razão menor que um e, portanto, converge. Consequentemente, pelo com substituído por e substituído por , a série converge. Assim, a série converge.  (b) Supondo que se aproxima de quando . Em particular, existe algum número natural tal que para todo . Assim para todo . Ou Seja, cresce quando cresce enquanto . Desta forma, para todo e não pode convergir para zero quando . Então a série diverge pelo .        Teste a convergência da série usando o     Fazendo temos Logo,  Então pelo a série dada é convergente.        Fixe doi números reais quaiquer diferente de zero e . Iniciamos mais uma vez por uma série geométrica mas desta vez construindo cada termo integrando cada termo, , de até obtendo . O resultado da nova série é Vamos estudar a convergência da série acima.    Para aplicar o precisamos calcular O Teste da Razão garante que a série converge se e diverge se . Entretanto, não sabemos nada sobre os casos em que .  Se , a série se reduz a que é justamente vezes a série harmônica, divergente, pelo .  Se , a série se reduz a que converge pelo . Veja o .  Concluímos, que a série converge se e somente se .    O teste de razão geralmente é bastante fácil de aplicar, mas deve-se sempre ter cuidado quando o limite da razão for . O próximo exemplo ilustra isso.   Testes da Razão com   Neste exemplo, veremos três séries diferentes, todas com . Um vai divergir e as outras duas vão convergir   A série harmônica    Já vimos, no , que esta série diverge. Observe:     Série harmônica alternada    Já vimos, no , que esta série converge. Mas também tem     Agora a série    Já vimos, no com , que esta série converge. Mas também tem                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              Teste da Raiz  Há outro teste que é muito semelhante à ideia do teste da razão. Também vem de um reexame da série geométrica O teste da razão foi baseado na observação de que , que determina em grande parte se a série converge ou não, pode ser encontrada calculando a razão . O teste de raiz é baseado na observação de que também pode ser determinado observando que a raiz -ésima do -ésimo termo para grande: É claro que, em geral, o -ésimo termo não é exatamente . No entanto, se para muito grande, o -ésimo termo é aproximadamente proporcional a , com dado pelo limite acima, esperaríamos que a série convergisse quando e divergem quando . Esse é realmente o caso.   Teste da Raiz   Assuma que exista ou é .  Se , então converge.  Se , ou , então diverge.        Observe que o teste de raiz não fornece absolutamente nenhuma conclusão sobre a convergência ou divergência da série se .     (a) Escolha qualquer satisfazendo . Assumindo que está próximo de quando . Em particular, existe algum número natural tal que para todo . Assim, para todo e a série converge por comparação com a série geométrica .  (b) Assumindo que está próximo de (ou cresce arbitrariamente) quando . Em particular, existe algum numéro natural tal que para todo . Logo, para todo e a série diverge pelo .        Vamos mostrar que está série converge quando e diverge quando .    Escreva . Vamos calcular Vamos agora mostrar que o limite de quando é exatamente . Para fazer isso, primeiro calculamos o limite do logaritmo. Logo, Um cálculo essencialmente idêntico fornece . Dessa forma, e o também fornece que se a série diverge, enquanto quando a série converge.    No exemplo a seguir exemplificaremos um caso em que usar o Teste da Raiz é mais simples do que o Teste da Razão.      Escreva . Então Agora calculamos o limite, Como o limite é estritamente menor que , a série converge.  Para chegar à mesma conclusão usando o teste da razão, seria preciso mostrar que o limite de quando é estritamente menor que 1. É claramente melhor utilizar com o teste de raiz.                                                                                                                                                                                                                                                                                                                                                          Sugesão de Vídeos     Sobre o Teste da Série Alternada      Estudando a série       Sobre o Teste da Razão         Teste da Divergencia, Testa da Integral e Teste da Comparação              Teste da Série Alternada, Testa da Razão e Teste da Raiz            "
},
{
  "id": "thm_SRdivergenceTest",
  "level": "2",
  "url": "section-1.html#thm_SRdivergenceTest",
  "type": "Teorema",
  "number": "1.1",
  "title": "Teste da Divergência.",
  "body": " Teste da Divergência   Se a sequência não converge para zero , tentão a série diverge.   "
},
{
  "id": "eg_SRdivTest",
  "level": "2",
  "url": "section-1.html#eg_SRdivTest",
  "type": "Exemplo",
  "number": "1.2",
  "title": "Uma série divergente.",
  "body": " Uma série divergente   A série é divergente.    Seja . Então Assim a série diverge.   "
},
{
  "id": "wrn_SRdivTest",
  "level": "2",
  "url": "section-1.html#wrn_SRdivTest",
  "type": "Atenção",
  "number": "1.3",
  "title": "",
  "body": "  O teste de divergência é um teste de sentido único . Afirma que não é zero, ou não existe, então a série diverge. Mas não diz absolutamente nada quando . Em particular, é perfeitamente possível que uma série  divergir embora . A série é um exemplo disto. Mostraremos no , que ela diverge.   "
},
{
  "id": "eg_firstIntTest",
  "level": "2",
  "url": "section-1.html#eg_firstIntTest",
  "type": "Exemplo",
  "number": "1.4",
  "title": "Convergência da série harmônica.",
  "body": " Convergência da série harmônica  Visualize os termos da série harmônica como um gráfico de barras cada termo é um retângulo de altura e largura . O limite da série é então a área limite desta união de retângulos.       Considere o esboço à esquerda da . Isto mostra que a área das colunas sombreadas, , é maior que a área sob a curva com . Ou seja Se continuássemos desenhando as colunas infinitamente, teríamos Podemos calcular exatamente essa integral imprópria: Ou seja, a área sob a curva diverge para e, portanto, a área representada pelas colunas também deve divergir para .  Deve ficar claro que o argumento acima pode ser facilmente generalizado. Por exemplo, o mesmo argumento vale para a série De fato, vemos à direita da que e, portanto Esta última integral imprópria é fácil de calcular: Assim sabemos que e assim a série deve convergir.  "
},
{
  "id": "thm_SRintegralTest",
  "level": "2",
  "url": "section-1.html#thm_SRintegralTest",
  "type": "Teorema",
  "number": "1.6",
  "title": "Teste da Integral.",
  "body": " Teste da Integral   Seja qualquer número natural. Se for uma função definida e contínua para todo e que obedece   para todo e   diminui à medida que aumenta e   para todo .       Então Além disso, quando a série converge, o erro de truncamento é    "
},
{
  "id": "proof-1",
  "level": "2",
  "url": "section-1.html#proof-1",
  "type": "Demonstração",
  "number": "1.2.1",
  "title": "",
  "body": " Seja qualquer inteiro fixo com . Então   converge se e somente se converge remover um número finito fixo de termos de uma série não pode afetar se ela converge ou não.  Como para todo , a sequência de somas parciais obedece . Ou seja, aumenta à medida que aumenta.  Portanto, deve convergir para algum número finito ou aumentar para infinito. Ou seja, converge para um número finito ou é .         A área sombreada na é pois  o primeiro retângulo sombreado tem altura e largura e, portanto, área e  o segundo retângulo sombreado tem altura e largura e, portanto, área e assim por diante  Essa área sombreada é menor que a área sob a curva para . Então e, se a integral for finita, a soma também será finita. Além disso, o limite desejado no erro de truncamento é apenas o caso especial desta desigualdade com :        Para o caso de divergência veja a . A (nova) área sombreada na figura é novamente porque  o primeiro retângulo sombreado tem altura e largura e, portanto, área e  o segundo retângulo sombreado tem altura e largura e, portanto, área e assim por diante  Desta vez, a área sombreada é maior que a área sob a curva para . Então e, se a integral for infinita, a soma também será infinita.  "
},
{
  "id": "eg_SRpTest",
  "level": "2",
  "url": "section-1.html#eg_SRpTest",
  "type": "Exemplo",
  "number": "1.9",
  "title": "O <span class=\"process-math\">\\(p\\)<\/span>-teste: <span class=\"process-math\">\\(\\sum\\limits_{n=1}^\\infty\\frac{1}{n^p}\\)<\/span>.",
  "body": " O -teste:   Seja . Agora usaremos o teste da integral para determinar se a série (que às vezes é chamada de -series) converge.  Para isso, precisamos de uma função que obedeça para todo maior que algum . Certamente obedece para todo . Então, vamos escolher este e tentar . (Podemos sempre aumentar , se for necessário.)   Esta função também obedece às outras duas condições do :   para todo e   descrece à medida que cresce já que para todo .     Portanto, o teste da integral nos diz que a série converge se e somente se a integral converge.  Sabemos que a integral converge se somente se .  Portanto, concluímos que converge se e somente se . Este às vezes é chamado de -teste.  Em particular, a série , que é chamada de série harmônica, tem e assim diverge. À medida que adicionamos mais e mais termos dessa série, os termos que adicionamos, a saber, , ficam cada vez menores e tendem a zero, mas tendem a zero muito lentamente que a soma total ainda é infinita.  Por outro lado, a série tem e assim converge. Desta vez, à medida que adicionamos mais termos desta série, os termos que adicionamos, a saber, , tendem a zero (apenas) rápido o suficiente para que soma total seja finita. Lembre-se, para este exemplo, a convergência ocorre muito lentamente é necessário pegar um grande número de termos para obter uma aproximação decente da soma total. Se aproximarmos pela série truncada , cometemos um erro de no máximo Isso tende a zero quando , mas muito lentamente.    "
},
{
  "id": "eg_SRlnpTest",
  "level": "2",
  "url": "section-1.html#eg_SRlnpTest",
  "type": "Exemplo",
  "number": "1.10",
  "title": "<span class=\"process-math\">\\(\\sum\\limits_{n=2}^\\infty\\frac{1}{n(\\log n)^p}\\)<\/span>.",
  "body": "    Seja . Agora usaremos o teste integral para determinar se a série converge.  Como no último exemplo, começamos escolhendo uma função que obedece para todo maior que algum . Certamente obedece para todo . Então, vamos usar esse e tentar .   Agora vamos verificar as outras duas condições do :  Tanto quanto são positivos para todo , então para todo .  À medida que aumenta, e aumentam e, portanto, aumenta e diminui.     Assim, o teste integral nos diz que a série converge se e somente se a integral converge.  Para testar a convergência da integral, fazemos a substituição , . Já sabemos que a integral é a integral e, portanto, a integral , converge se e somente se .  Portanto, concluímos que converge se e somente se .  "
},
{
  "id": "thm_SRcomparisonTest",
  "level": "2",
  "url": "section-1.html#thm_SRcomparisonTest",
  "type": "Teorema",
  "number": "1.11",
  "title": "Teste da Comparação.",
  "body": " Teste da Comparação   Seja um número natural e seja .  Se para todo e converge, então converge.  Se para todo e diverge, então diverge.     "
},
{
  "id": "proof-2",
  "level": "2",
  "url": "section-1.html#proof-2",
  "type": "Demonstração",
  "number": "1.3.1",
  "title": "“Demonstração”.",
  "body": "  Demonstração   Não Demonstraremos este teorema aqui. Vamos apenas fazer algumas observações. É por isso que existem aspas em Demonstração . Para uma prova real veja a seção opcional .  Se converge para um número finito e se os termos em são menores que os termos em , então não é surpresa que também converge.  Se diverge (ou seja, tende ao ) e se os termos em são maiores que os termos em , então obviamente tende ao , e assim também diverge.    "
},
{
  "id": "eg_SRcomparisonTestA",
  "level": "2",
  "url": "section-1.html#eg_SRcomparisonTestA",
  "type": "Exemplo",
  "number": "1.12",
  "title": "<span class=\"process-math\">\\(\\sum_{n=1}^\\infty\\frac{1}{n^2+2n+3}\\)<\/span>.",
  "body": "    Poderíamos determinar se a série converge aplicando o teste da integral. Mas não vale o esforço. A convergência ou não de qualquer série é determinada pelo comportamento da soma para muito grande. Portanto, o primeiro passo para lidar com esse problema é desenvolver alguma intuição sobre o comportamento de quando for muito grande.   Passo 1: Neste caso, quando for muito grande O símbolo   significa muito maior que . Da mesma forma, o símbolo   significa muito menos que . Bons símbolos taquigráficos podem ser bastante expressivos.  para que . Já sabemos, do , que converge se e somente se . Portanto, , que tem , converge, e esperamos que convirja também.   Passo 2: Podemos usar o teste de comparação para confirmar que esse é realmente o caso. Para qualquer , , de modo que . Então o teste de comparação, , com e , nos diz que converge.    "
},
{
  "id": "eg_SRcomparisonTestB",
  "level": "2",
  "url": "section-1.html#eg_SRcomparisonTestB",
  "type": "Exemplo",
  "number": "1.13",
  "title": "<span class=\"process-math\">\\(\\sum_{n=1}^\\infty\\frac{n+\\cos n}{n^3-1\/3}\\)<\/span>.",
  "body": "    Como no exemplo anterior, o primeiro passo é desenvolver alguma intuição sobre o comportamento de quando for muito grande.    Passo 1: Quando é muito grande,   temos e   temos .  Assim quando é muito grande Já sabemos do , com , que converge, então esperamos que convirja também     Passo 2: Podemos usar o teste de comparação para confirmar que esse é realmente o caso. Para fazer isso, precisamos encontrar uma constante tal que é menor que para todo . Uma boa maneira Semelhante a como calculamos os limites no infinito. para fazer isso é fatorar o termo dominante (neste caso ) do numerador e também fatorar o termo dominante (neste caso ) do denominador. Então agora precisamos encontrar uma constante de tal forma que seja menor que para todo .   Primeiro considere o numerador . Para todo    e     Assim o numerador é sempre menor que .    Em seguida, considere o denominador .  Quando , encontra-se entre e de modo a   está entre e e cosequentemente   está entre e .     Como o numerador é sempre menor que e é sempre menor que , a fração   Agora sabemos que e, já que converge, pelo teste da comparação converge.     "
},
{
  "id": "thm_SRlimitComparison",
  "level": "2",
  "url": "section-1.html#thm_SRlimitComparison",
  "type": "Teorema",
  "number": "1.14",
  "title": "Teste da Comparação do Limite.",
  "body": " Teste da Comparação do Limite   Seja e duas séries com para todo . Assuma que existe.  Se converge, então também converge.  Se e diverge, então também diverge.  Em particular, se , então converge se e somente se converge.   "
},
{
  "id": "proof-3",
  "level": "2",
  "url": "section-1.html#proof-3",
  "type": "Demonstração",
  "number": "1.3.2",
  "title": "",
  "body": " (a) Como , sabemos que,  quando é grande, fica muito próximo de , então está próximo de .  Em particular, existe algum número natural para que , para todo e, portanto,   com , para todo .   implica que converge.    (b) Vamos supor que . (Se , basta substituir por .) Já que , sabemos que,  quando é grande, está muito próximo de .  Em particular, existe algum número natural para que e, portanto,   com , para todo .   implica que diverge.    "
},
{
  "id": "eg_SRlimCompA",
  "level": "2",
  "url": "section-1.html#eg_SRlimCompA",
  "type": "Exemplo",
  "number": "1.15",
  "title": "<span class=\"process-math\">\\(\\sum_{n=1}^\\infty\\frac{\\sqrt{n+1}}{n^2-2n+3}\\)<\/span>.",
  "body": "    Defina . Primeiro tentamos desenvolver alguma intuição sobre o comportamento de para grande e confirmamos que a intuição esá correta.   Passo 1: Intuição. Quando , o numerador e o denominador para que e pelo , com , a série converge.   Passo 2: Confirmando a intuição. Para confirmar a intuição, definimos e calculamos o limite Novamente, é uma boa ideia fatorar o termo dominante do numerador e o termo dominante do denominador. Já sabemos que a série converge pelo como . Então a série converge pelo teste de comparação de limite, .    "
},
{
  "id": "eg_SRlimCompAbis",
  "level": "2",
  "url": "section-1.html#eg_SRlimCompAbis",
  "type": "Exemplo",
  "number": "1.16",
  "title": "<span class=\"process-math\">\\(\\sum_{n=1}^\\infty\\frac{\\sqrt{n+1}}{n^2-2n+3}\\text{,}\\)<\/span> novamente.",
  "body": " , novamente  Também podemos tentar lidar com a série de , usando o teste de comparação diretamente. Mas isso exige que encontremos para que Podemos fazer isso examinando o numerador e o denominador separadamente:  O numerador não é razoável, pois para todo :   O denominador é um pouco mais complicado, pois precisamos de um limite inferior , em vez de um limite superior, e não podemos simplesmente escrever , que é falso. Em vez disso, temos que fazer um argumento mais cuidadoso. Em particular, gostaríamos de encontrar e para que , ou seja, para todo . Para , temos . Portanto, para ,   Juntando o numerador e o denominador temos e o teste de comparação garante que a série converge. É bastante claro que a abordagem do foi muito mais direto.  "
},
{
  "id": "fig-alternada-serie",
  "level": "2",
  "url": "section-1.html#fig-alternada-serie",
  "type": "Figura",
  "number": "1.17",
  "title": "",
  "body": "    "
},
{
  "id": "thm_SRalternating",
  "level": "2",
  "url": "section-1.html#thm_SRalternating",
  "type": "Teorema",
  "number": "1.18",
  "title": "Teste da Série Alternada.",
  "body": " Teste da Série Alternada   Seja ser uma sequência de números reais que satisfaz   para todo e   para todo (ou seja, a sequência é monótona decrescente) e   .  Então converge e, para cada número natural , está entre e (o primeiro termo descartado) . Aqui é, como anteriormente, a -ésima soma parcial .   "
},
{
  "id": "eg_SRaltharmonic",
  "level": "2",
  "url": "section-1.html#eg_SRaltharmonic",
  "type": "Exemplo",
  "number": "1.19",
  "title": "Convergência da série harmônica alternada.",
  "body": " Convergência da série harmônica alternada  Vimos que, no , que a série harmônica diverge. Por outro lado, a serie converge pelo com . Observe:   para todo , de modo que é uma série alternada, e   decresce quando cresce, e   .  Assim todas as hipóteses do , são todas satisfeitas.  "
},
{
  "id": "example-10",
  "level": "2",
  "url": "section-1.html#example-10",
  "type": "Exemplo",
  "number": "1.20",
  "title": "<span class=\"process-math\">\\(\\sum_{n=1}^{\\infty}\\frac{(-1)^n3n}{4n-1}\\)<\/span>.",
  "body": "   Escreva . A série é alternada, mas Assim, a condição não é satisfeita. Em vez disso, olhamos para o limite do -enésimo termo da série: Este limite não existe, logo a séire é divergente pelo . "
},
{
  "id": "thm_SRratio",
  "level": "2",
  "url": "section-1.html#thm_SRratio",
  "type": "Teorema",
  "number": "1.21",
  "title": "Teste da Razão.",
  "body": " Teste da Razão   Seja um inteiro positivo qualquer e assuma que para todo .  Se , então converge.  Se , ou , então diverge.     "
},
{
  "id": "warning-2",
  "level": "2",
  "url": "section-1.html#warning-2",
  "type": "Atenção",
  "number": "1.22",
  "title": "",
  "body": "  Observe que o teste da razão não fornece absolutamente nenhuma conclusão sobre a convergência ou divergência da série se . Como mostra o , mais adiante.   "
},
{
  "id": "proof-4",
  "level": "2",
  "url": "section-1.html#proof-4",
  "type": "Demonstração",
  "number": "1.6.1",
  "title": "",
  "body": " (a) Escolha um número qualquer satisfazendo . Assumindo que se aproxima de quando . Em particular, existe algum número natural tal que para todo . Então para todo . Em particular para todo . A série é uma série geométrica com razão menor que um e, portanto, converge. Consequentemente, pelo com substituído por e substituído por , a série converge. Assim, a série converge.  (b) Supondo que se aproxima de quando . Em particular, existe algum número natural tal que para todo . Assim para todo . Ou Seja, cresce quando cresce enquanto . Desta forma, para todo e não pode convergir para zero quando . Então a série diverge pelo .  "
},
{
  "id": "example-11",
  "level": "2",
  "url": "section-1.html#example-11",
  "type": "Exemplo",
  "number": "1.23",
  "title": "<span class=\"process-math\">\\(\\sum_{n=1}^{\\infty} (-1)^n\\frac{n^3}{3^n}\\)<\/span>.",
  "body": "     Teste a convergência da série usando o     Fazendo temos Logo,  Então pelo a série dada é convergente.  "
},
{
  "id": "eg_SRratioB",
  "level": "2",
  "url": "section-1.html#eg_SRratioB",
  "type": "Exemplo",
  "number": "1.24",
  "title": "<span class=\"process-math\">\\(\\sum_{n=0}^\\infty \\frac{a}{n+1} X^{n + 1}\\)<\/span>.",
  "body": "     Fixe doi números reais quaiquer diferente de zero e . Iniciamos mais uma vez por uma série geométrica mas desta vez construindo cada termo integrando cada termo, , de até obtendo . O resultado da nova série é Vamos estudar a convergência da série acima.    Para aplicar o precisamos calcular O Teste da Razão garante que a série converge se e diverge se . Entretanto, não sabemos nada sobre os casos em que .  Se , a série se reduz a que é justamente vezes a série harmônica, divergente, pelo .  Se , a série se reduz a que converge pelo . Veja o .  Concluímos, que a série converge se e somente se .   "
},
{
  "id": "eg_SRratioC",
  "level": "2",
  "url": "section-1.html#eg_SRratioC",
  "type": "Exemplo",
  "number": "1.25",
  "title": "Testes da Razão com <span class=\"process-math\">\\(L=1\\)<\/span>.",
  "body": " Testes da Razão com   Neste exemplo, veremos três séries diferentes, todas com . Um vai divergir e as outras duas vão convergir   A série harmônica    Já vimos, no , que esta série diverge. Observe:     Série harmônica alternada    Já vimos, no , que esta série converge. Mas também tem     Agora a série    Já vimos, no com , que esta série converge. Mas também tem    "
},
{
  "id": "thm_SRroot",
  "level": "2",
  "url": "section-1.html#thm_SRroot",
  "type": "Teorema",
  "number": "1.26",
  "title": "Teste da Raiz.",
  "body": " Teste da Raiz   Assuma que exista ou é .  Se , então converge.  Se , ou , então diverge.     "
},
{
  "id": "warning-3",
  "level": "2",
  "url": "section-1.html#warning-3",
  "type": "Atenção",
  "number": "1.27",
  "title": "",
  "body": "  Observe que o teste de raiz não fornece absolutamente nenhuma conclusão sobre a convergência ou divergência da série se .   "
},
{
  "id": "proof-5",
  "level": "2",
  "url": "section-1.html#proof-5",
  "type": "Demonstração",
  "number": "1.7.1",
  "title": "",
  "body": " (a) Escolha qualquer satisfazendo . Assumindo que está próximo de quando . Em particular, existe algum número natural tal que para todo . Assim, para todo e a série converge por comparação com a série geométrica .  (b) Assumindo que está próximo de (ou cresce arbitrariamente) quando . Em particular, existe algum numéro natural tal que para todo . Logo, para todo e a série diverge pelo .  "
},
{
  "id": "eg_rootA",
  "level": "2",
  "url": "section-1.html#eg_rootA",
  "type": "Exemplo",
  "number": "1.28",
  "title": "<span class=\"process-math\">\\(\\sum_{n=1}^\\infty \\frac{ (-3)^n \\sqrt{n+1}}{2n+3}x^n\\)<\/span>.",
  "body": "     Vamos mostrar que está série converge quando e diverge quando .    Escreva . Vamos calcular Vamos agora mostrar que o limite de quando é exatamente . Para fazer isso, primeiro calculamos o limite do logaritmo. Logo, Um cálculo essencialmente idêntico fornece . Dessa forma, e o também fornece que se a série diverge, enquanto quando a série converge.   "
},
{
  "id": "eg_rootB",
  "level": "2",
  "url": "section-1.html#eg_rootB",
  "type": "Exemplo",
  "number": "1.29",
  "title": "<span class=\"process-math\">\\(\\sum_{n=1}^\\infty \\big(\\frac{n}{n+1}\\big)^{n^2}\\)<\/span>.",
  "body": "    Escreva . Então Agora calculamos o limite, Como o limite é estritamente menor que , a série converge.  Para chegar à mesma conclusão usando o teste da razão, seria preciso mostrar que o limite de quando é estritamente menor que 1. É claramente melhor utilizar com o teste de raiz.  "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-1.html#exercise-1",
  "type": "Exercício",
  "number": "1.9.1",
  "title": "",
  "body": ""
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-1.html#exercise-2",
  "type": "Exercício",
  "number": "1.9.2",
  "title": "",
  "body": ""
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-1.html#exercise-3",
  "type": "Exercício",
  "number": "1.9.3",
  "title": "",
  "body": ""
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-1.html#exercise-4",
  "type": "Exercício",
  "number": "1.9.4",
  "title": "",
  "body": ""
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "section-1.html#exercise-5",
  "type": "Exercício",
  "number": "1.9.5",
  "title": "",
  "body": ""
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-1.html#exercise-6",
  "type": "Exercício",
  "number": "1.9.6",
  "title": "",
  "body": ""
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-1.html#exercise-7",
  "type": "Exercício",
  "number": "1.9.7",
  "title": "",
  "body": ""
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "section-1.html#exercise-8",
  "type": "Exercício",
  "number": "1.9.8",
  "title": "",
  "body": ""
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "section-1.html#exercise-9",
  "type": "Exercício",
  "number": "1.9.9",
  "title": "",
  "body": ""
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "section-1.html#exercise-10",
  "type": "Exercício",
  "number": "1.9.10",
  "title": "",
  "body": ""
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "section-1.html#exercise-11",
  "type": "Exercício",
  "number": "1.9.11",
  "title": "",
  "body": ""
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "section-1.html#exercise-12",
  "type": "Exercício",
  "number": "1.9.12",
  "title": "",
  "body": ""
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "section-1.html#exercise-13",
  "type": "Exercício",
  "number": "1.9.13",
  "title": "",
  "body": ""
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "section-1.html#exercise-14",
  "type": "Exercício",
  "number": "1.9.14",
  "title": "",
  "body": ""
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "section-1.html#exercise-15",
  "type": "Exercício",
  "number": "1.9.15",
  "title": "",
  "body": ""
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "section-1.html#exercise-16",
  "type": "Exercício",
  "number": "1.9.16",
  "title": "",
  "body": ""
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "section-1.html#exercise-17",
  "type": "Exercício",
  "number": "1.9.17",
  "title": "",
  "body": ""
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "section-1.html#exercise-18",
  "type": "Exercício",
  "number": "1.9.18",
  "title": "",
  "body": ""
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "section-1.html#exercise-19",
  "type": "Exercício",
  "number": "1.9.19",
  "title": "",
  "body": ""
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "section-1.html#exercise-20",
  "type": "Exercício",
  "number": "1.9.20",
  "title": "",
  "body": ""
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "section-1.html#exercise-21",
  "type": "Exercício",
  "number": "1.9.21",
  "title": "",
  "body": ""
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "section-1.html#exercise-22",
  "type": "Exercício",
  "number": "1.9.22",
  "title": "",
  "body": ""
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "section-1.html#exercise-23",
  "type": "Exercício",
  "number": "1.9.23",
  "title": "",
  "body": ""
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Seção",
  "number": "2",
  "title": "Convergência Absoluta e Condicional",
  "body": " Convergência Absoluta e Condicional   🔗Até aqui apresentamos exemplos de séries que convergem e de séries que divergem. De fato, não discutimos o quão robusta é a convergência das séries ou seja, podemos ajustar os coeficientes de alguma forma, deixando a convergência inalterada. Um bom exemplo disso é a série Esta é uma série geométrica simples e sabemos que converge. O exemplo mostrou que podemos multiplicar ou dividir o n -ésimo termo por e ainda vai convergir. Podemo também multiplicar -enésimo termo por (tornando-a em uma série alternada), e ainda convergirá.  exploramos bastante a série harmônica e suas variações e sabemos que é muito mais sutíl. Enquanto diverge, as duas séries a seguir convergem: Isso sugere que a divergência da série harmônica é muito mais delicada. Nesta seção, discutimos uma maneira de caracterizar esse tipo de convergência delicada especialmente na presença de mudanças de sinal.    Definições   Convergência absoluta e Condicional     Uma série é dita absolutamente convergente se a série converge.  Se converge mas diverge dizemos que é condicionalmente convergente.      Considerando essas definições, deve ficar claro que a convergência absoluta é uma condição mais forte do que apenas a convergência simples. Todos os termos em são forçados a ser positivos (pela operação de valor absoluto), de modo que deve ser maior que  tornando mais fácil para divergir. Isso é formalizado pelo seguinte teorema, sendo uma consequência imediata do , com .   Convergência absoluta implica em Convergência   Se a série converge então a série também converge. Ou seja, convergência absoluta implica convergência.    Lembre-se de que alguns dos testes de convergência apresentados (por exemplo, ) só podem ser aplicados a séries com termos positivos. O abre a possibilidade de aplicar testes destes de convergência somente positivos para séries cujos termos não são todos positivos, verificando a convergência absoluta ao invés da convergência simples       A série harmônica alternada do Exemplo converge ( ). Mas a série harmônica do diverge (pelo ). Então a série harmônica alternada converge condicionalmente.       Já que a série do converge ( ), a série converge absolutamente, e portanto converge.    "
},
{
  "id": "def_SRabsCond",
  "level": "2",
  "url": "section-2.html#def_SRabsCond",
  "type": "Definição",
  "number": "2.1",
  "title": "Convergência absoluta e Condicional.",
  "body": " Convergência absoluta e Condicional     Uma série é dita absolutamente convergente se a série converge.  Se converge mas diverge dizemos que é condicionalmente convergente.     "
},
{
  "id": "thm_SRabs",
  "level": "2",
  "url": "section-2.html#thm_SRabs",
  "type": "Teorema",
  "number": "2.2",
  "title": "Convergência absoluta implica em Convergência.",
  "body": " Convergência absoluta implica em Convergência   Se a série converge então a série também converge. Ou seja, convergência absoluta implica convergência.   "
},
{
  "id": "eg_SRabsCond",
  "level": "2",
  "url": "section-2.html#eg_SRabsCond",
  "type": "Exemplo",
  "number": "2.3",
  "title": "<span class=\"process-math\">\\(\\sum_{n=1}^\\infty(-1)^{n-1}\\frac{1}{n}\\)<\/span>.",
  "body": "    A série harmônica alternada do Exemplo converge ( ). Mas a série harmônica do diverge (pelo ). Então a série harmônica alternada converge condicionalmente.  "
},
{
  "id": "eg_SRabsCondB",
  "level": "2",
  "url": "section-2.html#eg_SRabsCondB",
  "type": "Exemplo",
  "number": "2.4",
  "title": "<span class=\"process-math\">\\(\\sum_{n=1}^\\infty(-1)^{n-1}\\frac{1}{n^2}\\)<\/span>.",
  "body": "    Já que a série do converge ( ), a série converge absolutamente, e portanto converge.  "
},
{
  "id": "references-backmatter",
  "level": "1",
  "url": "references-backmatter.html",
  "type": "Referêcias",
  "number": "3",
  "title": "Referências",
  "body": " Referências  FELDMAN, joel; RECHNITZER, Andrew; YEAGER, Elyse CLP-2 Integral Calculus. 2021.  STEWART, James. Cálculo, Volume II.  Cengage Learning , 2013.  SILVA, Leon; SANTOS, Marcelo; Machado, Ricardo. Elementos de Computação Matemática com SageMath.  SBM , 2019.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
