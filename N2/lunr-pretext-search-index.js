var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-1",
  "level": "1",
  "url": "frontmatter-1.html",
  "type": "Pré-textual",
  "number": "",
  "title": "Pré-textual",
  "body": "   Leon Silva  Departamento de Matemática  Universidade Federal Rural de Pernambuco        Aqui faremos um resumo das atividades da semana 10.   "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Seção",
  "number": "1",
  "title": "Introdução às Séries Infinitas",
  "body": " Introdução às Séries Infinitas    Séries  Uma série infinita é uma soma de infinitos termos. Em notação de soma, escreve-se Quando escrevemos um número usando sua expansão decimal, de fato estamos expressando-o como uma série. Talvez o exemplo mais simples disso seja a expansão decimal de : Lembre-se de que a expansão escrita dessa maneira na verdade significa O índice do somatório é, obviamente, um índice genérico. Podemos usar qualquer símbolo que desejar para o índice de soma. Uma série pode ser expressa usando a notação de somatório de muitas maneiras. Por exemplo, as seguintes expressões representam a mesma série: Podemos ir da primeira linha para a segunda linha substituindo  não se esqueça de alterar também os limites da soma (de modo que torna-se de modo que n = 1 se torna j-1 que é reescrito como ). Para ir da primeira linha para a terceira linha, substitua em todos os lugares, inclusive nos limites do somatório (de modo que torne-se que é reescrito como ).   Sempre que você estiver em dúvida sobre qual série uma expressão de notação de somatória representa, é um bom hábito escrever os primeiros termos, assim como fizemos acima.   É claro que, neste ponto, não está claro se a soma de infinitos termos resulta em um número finito ou não. Para dar sentido a isso, vamos reformular o problema em termos de convergência de sequências. Antes de prosseguirmos mais formalmente, vamos ilustrar a ideia básica com alguns exemplos simples.      Como acabamos de ver anteriormente da série é Observe que o -ésimo termo na soma é Então a soma dos primeiros , , e termos desta série são Note que à medida que adicionamos mais termos, nos aproximamos cada vez mais de . Logo, é razoável escrever .     e   Verifique a convêngência para as séries:       Cada termo da śerie é exatamente . Então a soma dos primeiros termos vale exatamente . À medida que adicionamos mais e mais termos, isso cresce sem limites. Portanto, é muito razoável dizer que a série diverge.        Observe que Então a soma dos primeiros termos é se é par e se é par. À medida que adicionamos mais termos da série, a soma alterna entre e Portanto, a soma infinita de termos não faz sentido. Logo, podemos dizer que a série diverge.    Em e , tentamos entender a série examinando a soma dos primeiros termos e depois extrapolando à medida que adicionamos mais e mais termos. Ou seja, tentamos chegar à soma infinita observando o limite das somas (parciais) dos primeiros termos. Essa abordagem pode ser transformada em uma definição mais formal e rigorosa. Mais precisamente, para definir o que se entende por soma infinita , nós o aproximamos pela soma dos seus primeiros termos e então tomamos o limite conforme tende ao infinito.    A -ésima soma parcial da série é a soma dos seus primeiros termos As somas parciais formam uma sequência . Se esta sequência de somas parciais converge quando então dizemos que a série converge para e escrevemos Se a sequência de somas parciais diverge, dizemos que a série diverge.     Séries Geométricas   Seja e quaisquer dois números reais fixados com . A série é denominada série geométrica com primeiro termo e razão .   Observe que optamos por iniciar o índice de soma em . O primeiro termo é o termo , que é . O segundo termo é o termos , que é . E assim por diante. Poderíamos também ter escrito a série . Que é a mesma série o primeiro termo é , o segundo termo é , e assim sucessivamente. Independentemente de como escrevemos a série, é o primeiro termo e é a razão entre os termos sucessivos.  As séries geométricas têm a propriedade extremamente útil de que existe uma fórmula muito simples para as suas somas parciais. Denote a soma parcial por Observe que isso é quase o mesmo que . As únicas diferenças são que o primeiro termo, , está faltando e um termo adicional , , foi adicionado ao final. Então Por outro lado, se , então Resumindo:   Agora que temos essa expressão, podemos determinar se a série converge ou não. Se , então tende a zero quando , de modo a convergir para quando e Por outro lado se , diverge. Para entender essa divergência, considere os casos a seguir:  Se , então tende para quando .  Se , então a grandeza de cresce para , e o sinal de oscila entre e , quando .  Se , então cresce para a medida que .  Se , então apenas oscila entre 3 quando .  Em cada caso, a sequência de somas parciais não converge e, portanto, a série não converge.  Na estão alguns esboços dos gráficos de e , , for e .        Nestes esboços vemos que  Quando , e também quando com ímpar, temos . Por outro lado, quando com par, temos .  Quando , se aproxima de à medida que cresce.  Quando , apenas alterna entre , quando é ímpar, e , quando é par.    Devemos resumir os resultados do exemplo anterior no lemma a seguir.   Séries Geométricas   Seja e números reais e seja um inteiro então Além disso, se então     Agora que sabemos como lidar com séries geométricas vamos voltar ao .   Expansões Decimais  A expansão decimal é uma série geométrica com o primeiro termo e razão . Então, pelo , exatamente como esperávamos.  Podemos levar essa ideia adiante. Considere a expansão decimal periódica: Esta é outra série geométrica com o primeiro termo e razão . Então, pelo , novamente, como esperado. Desta forma, qualquer expansão decimal periódica converge para uma razão de dois inteiros ou seja, para um número racional.  A seguir está outro exemplo mais complicado.     Normalmente, é muito difícil escrever uma expressão para as somas parciais de uma série. Séries geométricas são exceções a isso. Outra família de séries para as quais podemos escrever somas parciais é denominada “série telescópica”. Essas séries têm a propriedade desejável de que muitos dos termos da soma se cancelam, tornando as somas parciais bastante simples.   Série Telescópica  Agora, vamos estudar a série que foi manipulada para ilustrar um fenômeno chamado telescópio . Observe que o -ésimo termo pode ser reescrita como Por conta disso, temos cancelamentos quando somamos os termos. Isso nos permite obter uma fórmula simples para as somas parciais desta série. O segundo termo de cada colchete cancela exatamente o primeiro termo do colchete seguinte. Então a soma torna-se deixando a soma simples de calcular   Mais geralmente, se pudermos escrever desde que este limite exista. Frequentemente e então . Mas isso nem sempre acontece, como explicaremos a seguir.   Uma série Telescópica Divergente   Estude a série     Vamos começar escrevendo apenas os primeiros termos. Mas Então isso pode facilitar calcular a soma parcial . Observe: Daí, Esta série telescópica diverge! Há uma lição importante aqui. As séries telescópicas podem divergir. Nem sempre convergem para .    Como foi o caso de limites, derivada e antiderivada, podemos calcular séries mais complicadas em termos de séries mais simples, entendendo como elas interagem com as operações usuais da aritmética. Talvez não seja tão surpreendente que existam regras simples para adição e subtração de séries e para multiplicação de uma série por uma constante. Infelizmente, não existem regras gerais simples para computar produtos ou razões de séries.    Aritmética de séries   Seja um número real e sejam as séries e convergentes para e respectivamente. Ou seja, assuma que Então as seguintes afirmações são verdadeiras:   and    .          Como um exemplo simples de como usamos a aritmética das séries ( ), considere Sabemos que pois é uma Séries Geométrica e, logo vale o ) com primeiro termo e razão . Também sabemos que pela iguadade . Agora podemos usar o para obter:      Sugestão de vídeos     Introdução a somas parciais      Exemplo resolvido: fórmula para o enésimo termo da soma parcial      Exemplo resolvido: valor do termo da soma parcial      A série converge?      Séries Geométricas: a série converge?      Séries Geométricas: a série converge?      Séries Geométricas: dízimas periódicas                 Suponha que a sequência de somas parciais da série é .  Encontre .  Encontre .  Determine .     (a) (b) (c) 1      é a soma dos primeiros termos de , e é a soma dos mesmos termos exceto  . Então, quando . Em outros termos:       Ou seja, os termos que estamos somando estão ficando arbitrariamente pequenos à medida que avançamos.   Por definição, Ou seja, à medida que adicionamos mais termos da série, a nossa soma acumulada fica próxima de 1.      Suponha que a sequência de somas parciais da série é . Encontre .   Calcule separadamente dos outros termos.            Calcule .    , para .        , for . A série é Geométrica com , , e . Logo:     Calcule .   Para ajustar o índice inicial, fatore o primeiro termo da série ou subtraia duas séries.       Observe que    Se escrevermos os primeiros termos da nossa série, veremos que podemos fatorar uma constante para alterar o índice inicial.     Calcule .   Use regras de logaritmo para transformar isso em uma série telescópica mais simples   A séries diverge para .   Usando regras de logaritmo, notamos que   que é uma série telescópica. Vamos fazer uma tabela para descobrir as somas parciais.     Assim, é possível perceber que a soma parcial de termos é:      "
},
{
  "id": "p-3",
  "level": "2",
  "url": "section-1.html#p-3",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "série infinita "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "section-1.html#remark-1",
  "type": "Nota",
  "number": "1.1",
  "title": "",
  "body": " Sempre que você estiver em dúvida sobre qual série uma expressão de notação de somatória representa, é um bom hábito escrever os primeiros termos, assim como fizemos acima.  "
},
{
  "id": "eg_SRprelimSumA",
  "level": "2",
  "url": "section-1.html#eg_SRprelimSumA",
  "type": "Exemplo",
  "number": "1.2",
  "title": "<span class=\"process-math\">\\(\\ds \\sum_{n=1}^\\infty\\frac{3}{10^n}\\)<\/span>.",
  "body": "    Como acabamos de ver anteriormente da série é Observe que o -ésimo termo na soma é Então a soma dos primeiros , , e termos desta série são Note que à medida que adicionamos mais termos, nos aproximamos cada vez mais de . Logo, é razoável escrever .  "
},
{
  "id": "eg_SRprelimSumB",
  "level": "2",
  "url": "section-1.html#eg_SRprelimSumB",
  "type": "Exemplo",
  "number": "1.3",
  "title": "<span class=\"process-math\">\\(\\ds \\sum_{n=1}^\\infty 1\\)<\/span> e <span class=\"process-math\">\\(\\sum_{n=1}^\\infty (-1)^n\\)<\/span>.",
  "body": "  e   Verifique a convêngência para as séries:       Cada termo da śerie é exatamente . Então a soma dos primeiros termos vale exatamente . À medida que adicionamos mais e mais termos, isso cresce sem limites. Portanto, é muito razoável dizer que a série diverge.        Observe que Então a soma dos primeiros termos é se é par e se é par. À medida que adicionamos mais termos da série, a soma alterna entre e Portanto, a soma infinita de termos não faz sentido. Logo, podemos dizer que a série diverge.   "
},
{
  "id": "def_SRseries",
  "level": "2",
  "url": "section-1.html#def_SRseries",
  "type": "Definição",
  "number": "1.4",
  "title": "",
  "body": "  A -ésima soma parcial da série é a soma dos seus primeiros termos As somas parciais formam uma sequência . Se esta sequência de somas parciais converge quando então dizemos que a série converge para e escrevemos Se a sequência de somas parciais diverge, dizemos que a série diverge.   "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "section-1.html#definition-2",
  "type": "Definição",
  "number": "1.5",
  "title": "",
  "body": " Seja e quaisquer dois números reais fixados com . A série é denominada série geométrica com primeiro termo e razão .  "
},
{
  "id": "fig1",
  "level": "2",
  "url": "section-1.html#fig1",
  "type": "Figura",
  "number": "1.6",
  "title": "",
  "body": "   "
},
{
  "id": "lem_geomsum",
  "level": "2",
  "url": "section-1.html#lem_geomsum",
  "type": "Lema",
  "number": "1.7",
  "title": "Séries Geométricas.",
  "body": " Séries Geométricas   Seja e números reais e seja um inteiro então Além disso, se então    "
},
{
  "id": "eg_SRgeomB",
  "level": "2",
  "url": "section-1.html#eg_SRgeomB",
  "type": "Exemplo",
  "number": "1.8",
  "title": "Expansões Decimais.",
  "body": " Expansões Decimais  A expansão decimal é uma série geométrica com o primeiro termo e razão . Então, pelo , exatamente como esperávamos.  Podemos levar essa ideia adiante. Considere a expansão decimal periódica: Esta é outra série geométrica com o primeiro termo e razão . Então, pelo , novamente, como esperado. Desta forma, qualquer expansão decimal periódica converge para uma razão de dois inteiros ou seja, para um número racional.  A seguir está outro exemplo mais complicado.   "
},
{
  "id": "eg_SRtelecopeB",
  "level": "2",
  "url": "section-1.html#eg_SRtelecopeB",
  "type": "Exemplo",
  "number": "1.9",
  "title": "Uma série Telescópica Divergente.",
  "body": " Uma série Telescópica Divergente   Estude a série     Vamos começar escrevendo apenas os primeiros termos. Mas Então isso pode facilitar calcular a soma parcial . Observe: Daí, Esta série telescópica diverge! Há uma lição importante aqui. As séries telescópicas podem divergir. Nem sempre convergem para .   "
},
{
  "id": "thm_SRseriesarith",
  "level": "2",
  "url": "section-1.html#thm_SRseriesarith",
  "type": "Teorema",
  "number": "1.10",
  "title": "Aritmética de séries.",
  "body": " Aritmética de séries   Seja um número real e sejam as séries e convergentes para e respectivamente. Ou seja, assuma que Então as seguintes afirmações são verdadeiras:   and    .     "
},
{
  "id": "eg_SRseriesarith",
  "level": "2",
  "url": "section-1.html#eg_SRseriesarith",
  "type": "Exemplo",
  "number": "1.11",
  "title": "<span class=\"process-math\">\\(\\sum_{n=1}^\\infty\\Big( \\frac{1}{7^n}+\\frac{2}{n(n+1)}\\Big)\\)<\/span>.",
  "body": "    Como um exemplo simples de como usamos a aritmética das séries ( ), considere Sabemos que pois é uma Séries Geométrica e, logo vale o ) com primeiro termo e razão . Também sabemos que pela iguadade . Agora podemos usar o para obter:   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-1.html#exercise-1",
  "type": "Exercício",
  "number": "1.3.1",
  "title": "",
  "body": ""
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-1.html#exercise-2",
  "type": "Exercício",
  "number": "1.3.2",
  "title": "",
  "body": ""
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-1.html#exercise-3",
  "type": "Exercício",
  "number": "1.3.3",
  "title": "",
  "body": ""
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-1.html#exercise-4",
  "type": "Exercício",
  "number": "1.3.4",
  "title": "",
  "body": ""
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "section-1.html#exercise-5",
  "type": "Exercício",
  "number": "1.3.5",
  "title": "",
  "body": ""
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-1.html#exercise-6",
  "type": "Exercício",
  "number": "1.3.6",
  "title": "",
  "body": ""
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-1.html#exercise-7",
  "type": "Exercício",
  "number": "1.3.7",
  "title": "",
  "body": ""
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "section-1.html#exercise-8",
  "type": "Exercício",
  "number": "1.3.8",
  "title": "",
  "body": ""
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "section-1.html#exercise-9",
  "type": "Exercício",
  "number": "1.3.9",
  "title": "",
  "body": ""
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "section-1.html#exercise-10",
  "type": "Exercício",
  "number": "1.3.10",
  "title": "",
  "body": " Suponha que a sequência de somas parciais da série é .  Encontre .  Encontre .  Determine .     (a) (b) (c) 1      é a soma dos primeiros termos de , e é a soma dos mesmos termos exceto  . Então, quando . Em outros termos:       Ou seja, os termos que estamos somando estão ficando arbitrariamente pequenos à medida que avançamos.   Por definição, Ou seja, à medida que adicionamos mais termos da série, a nossa soma acumulada fica próxima de 1.    "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "section-1.html#exercise-11",
  "type": "Exercício",
  "number": "1.3.11",
  "title": "",
  "body": " Suponha que a sequência de somas parciais da série é . Encontre .   Calcule separadamente dos outros termos.          "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "section-1.html#exercise-12",
  "type": "Exercício",
  "number": "1.3.12",
  "title": "",
  "body": " Calcule .    , para .        , for . A série é Geométrica com , , e . Logo:   "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "section-1.html#exercise-13",
  "type": "Exercício",
  "number": "1.3.13",
  "title": "",
  "body": " Calcule .   Para ajustar o índice inicial, fatore o primeiro termo da série ou subtraia duas séries.       Observe que    Se escrevermos os primeiros termos da nossa série, veremos que podemos fatorar uma constante para alterar o índice inicial.   "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "section-1.html#exercise-14",
  "type": "Exercício",
  "number": "1.3.14",
  "title": "",
  "body": " Calcule .   Use regras de logaritmo para transformar isso em uma série telescópica mais simples   A séries diverge para .   Usando regras de logaritmo, notamos que   que é uma série telescópica. Vamos fazer uma tabela para descobrir as somas parciais.     Assim, é possível perceber que a soma parcial de termos é:   "
},
{
  "id": "references-backmatter",
  "level": "1",
  "url": "references-backmatter.html",
  "type": "Referêcias",
  "number": "2",
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
