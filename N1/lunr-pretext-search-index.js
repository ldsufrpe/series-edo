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
  "title": "Introdução às Sequências",
  "body": " Introdução às Sequências   O polinômio de Taylor de é dada por em que é o erro introduzido quando você aproxima por seu polinômio de Taylor de grau . No curso de derivada conhemos uma fórmula para . Agora vamos perguntar o que acontece quando vai ao infinito? O erro vai para zero, dando uma fórmula exata para ? Veremos mais tarde que faz e isso Neste ponto, não definimos ou desenvolvemos qualquer compreensão dessa soma infinita. Como podemos calcular a soma de um número infinito de termos? De fato, quando a soma de um número infinito de termos faz sentido? Claramente, precisamos construir bases para lidar com essas ideias. Ao longo do caminho também veremos outras funções para as quais o erro correspondente obedece para alguns valores de e não para outros valores de .  Agora considere a fórmula acima com para calcular o número : Como dissemos acima, ainda não entendemos o que fazer com esse número infinito de termos, mas podemos tentar descobrir isso pensando no que acontece à medida que pegamos mais e mais termos. Ao olhar para a soma infinita desta forma, obtemos naturalmente uma sequência de números A chave para entender a soma infinita original é entender o comportamento dessa sequências de números em particular, o que os números fazem à medida que avançamos mais e mais? Ele estabelece um determinado limite?    Limites de uma Sequência  A seguir uma definição matemática do termo sequências que usamos acima.    Uma sequência é uma lista de infinitos números com uma ordem específica. Denotaremos uma sequência numérica por     Frequentemente, especificamos uma sequência escrevendo-a mais explicitamente, como No qual é alguma função dos números naturais para os números reais.   Três sequências e mais uma  Aqui estão três sequências. Muitas vezes não existe uma fórmula simples e explícita para o -ésimo termo de uma sequência. Por exemplo, os dígitos decimais de formam uma sequência porém não existe uma fórmula simples para o -ésimo dígito.   Nossa principal preocupação com sequências será o comportamento de com tendendo para o infinito. Estamos interessados em saber se  converge para algum valor quando tende ao infinito.    Dizemos que uma sequência converge para o limite se se aproxima de quando tende ao infinito. Nesta caso, escrevemos A sequência converge se converge para algum limite. Caso contrário, dizemos que a sequência diverge .    Note a similaridade com os limites infinitos.    Convergência no   Estude a convergência das sequências a seguir:       A sequência diverge pois cresce sem limitações, em vez de se aproximar de algum valor finito, quando tende ao infinto.        A sequência diverge pois oscila entre e quando tende ao infinito.    A sequência dos dígitos decimais de .   A sequência dos dígitos decimais de também diverge, embora a prova esteja fora do escorpo deste texto. Se os dígitos de convergissem, então teria que ser um número racional. A irracionalidade de (que não pode ser escrito como uma fração) foi provada pela primeira vez por Lambert em 1761. A prova de Niven (1947) é mais acessível e convidamos o leitor interessado a usar seu mecanismo de busca favorito para encontrar guias passo a passo para essa prova. .        Com tendendo para o infinito, tende para zero. Então         Aqui está um exemplo um pouco menos trivial. Para estudar o comportamento de quando . Reescrevendo a expressão obtemos: Quando , o denominador tende a zero, de modo que o denominador tende para e tende para . Então    Observe que no , estamos realmente usando técnicas que usamos antes para estudar limites infinitos como . Essa experiência pode ser facilmente transferida para lidar com limites usando o seguinte resultado.    Se e se para todos os inteiros positivos , então         Seja . Então e    A maior parte das regras para a aritmética de limites de funções conhecidas conhece também se aplicam aos limites de sequências. Ou seja, as regras aplicadas a limites como também se aplicam a limites como .   Aritmética dos limites   Sejam , e números reais e sejam as duas sequências e convergindo para e respectivamente. Ou seja, suponha que Então os seguintes limites são verdadeiros.      (O limite da soma é a soma dos limites.)       (O limite da diferença é a diferença dos limites.)   .      (O limite do produto é o produto dos limites.)    Se então   (O limite do quociente é o quociente dos limites desde que o limite do denominador não seja zero.)       Usamos essas regras para avaliar os limites de sequências mais complicadas em termos dos limites de sequências mais simples assim como fizemos para limites de funções.   Aritmética dos limites  Combinando e ,    Há também um teorema do confronto (sanduíche) para sequências.   Teorema do Confronto   Se para todos os números naturais , e se então      Usando o Teorema do Confronto  Determine , no qual é o -ésimo digito decimal de . Ou seja,   Não temos uma fórmula simples para . Mas nós sabemos que e também sabemos que Então o teorema do confronto com , , e fornece    Finalmente, lembre-se de que podemos calcular o limite da composição de duas funções usando a continuidade. Da mesma forma, temos o seguinte resultado:   Limite de uma função contínua   Se e se a função é contínua em , então         Escreva com . Vimos, no que Já que é contínua e que , é o limite de , temos      Sugestão de vídeos     Sequências convergentes e divergentes      Exemplos resolvidos.      Definição formal do limite de uma sequência      Prova de que uma sequência converge usando a definição formal          Determine o limite da sequência ou mostre que a sequência diverge usando as regras do limite ou teoremas apropriados. Se a sequência divergir, digite DIV como sua resposta.          Nós temos , na qual . Assim,     http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=pretext-sequencia\/problem1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=pretext-sequencia\/problem1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=pretext-sequencia\/problem1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=pretext-sequencia\/problem1.pg      Sequência definida por uma função (Theorem 1.6.)  Seja uma função definida em para alguma constante . Se existe, então a sequência , definida para , converge e  Use a afirmação acima para determinar o limite da sequência ou digite DIV se a sequência divergir.           Temos no qual . Assim,    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=pretext-sequencia\/problem2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=pretext-sequencia\/problem2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=pretext-sequencia\/problem2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=pretext-sequencia\/problem2.pg      Determine o limite da sequência ou mostre que a sequência diverge usando as regras do limite ou teoremas apropriados. Se a sequência divergir, digite DIV como sua resposta.          Do fato da função ser contínua segue que     http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=pretext-sequencia\/problem3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=pretext-sequencia\/problem3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=pretext-sequencia\/problem3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=pretext-sequencia\/problem3.pg      Seja . Encontre o menor número tal que :  (a)  para   (b)  para   (c) Agora use a definição de limite para provar que . Ou seja, encontre o menor valor de (em termos de ) tal que para todo .  (Observe que estamos usando em vez de na definição para permitir que você insira sua resposta mais facilmente).  Digite sua resposta em função de ).                  Temos Portanto, forneceu , ou seja, . Segue-se que podemos tomar .  Pela parte (a), forneceu , ou seja, . Segue-se que podemos tomar .  Usando a parte (a), sabemos que forneceu . Assim, para completar a prova, seja e faça . Então, para , obtemos    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=pretext-sequencia\/problem4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=pretext-sequencia\/problem4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=pretext-sequencia\/problem4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=pretext-sequencia\/problem4.pg      Determine se a sequência converge ou diverge. Se convergir, encontre o limite.  Observe,  Converge (sim\/não):  Limite:    sim         http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=pretext-sequencia\/problem5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=pretext-sequencia\/problem5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=pretext-sequencia\/problem5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=pretext-sequencia\/problem5.pg      Determine se a sequência é divergente ou convergente. Se for convergente, avalie seu limite.  (Se divergir para o infinito, indique sua resposta como inf . Se divergir para infinito negativo, indique sua resposta como -inf . Se diverge sem ser infinito ou infinito negativo, responda como div )   Resposta:         http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=pretext-sequencia\/problem6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=pretext-sequencia\/problem6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=pretext-sequencia\/problem6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=pretext-sequencia\/problem6.pg      Escreva os cinco primeiros termos da sequência com, , determine se a sequência converge e, em caso afirmativo, encontre seu limite.  Enter the following information for .              (Digite DNE se o limite não existir.)  A sequência converge (Digite \"sim\" ou \"não\").                                      Para       , então a sequência converge para .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=pretext-sequencia\/problem7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=pretext-sequencia\/problem7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=pretext-sequencia\/problem7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=pretext-sequencia\/problem7.pg      Escreva os cinco primeiros termos da sequência ,determine se a sequência converge e, em caso afirmativo, encontre seu limite.  Insira as seguintes informações para .              (Digite DNE se o limite não existir.)  A sequência converge (Digite \"sim\" ou \"não\").                                      Para       então a sequência converge para .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=pretext-sequencia\/problem8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=pretext-sequencia\/problem8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=pretext-sequencia\/problem8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=pretext-sequencia\/problem8.pg      Escreva os primeiros cinco termos da sequência com , determine se a sequência converge e, em caso afirmativo, encontre seu limite.  Insira as seguintes informações para .              (Digite DNE se o limite não existir.)  A sequência converge (Digite \"sim\" ou \"não\").                                      Para       , então a sequência converge para .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=pretext-sequencia\/problem9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=pretext-sequencia\/problem9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=pretext-sequencia\/problem9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=pretext-sequencia\/problem9.pg      Escreva os primeiros cinco termos da sequência com, , determine se a sequência converge e, em caso afirmativo, encontre seu limite.  Insira as seguintes informações para .              (Digite DNE se o limite não existir.)  A sequência converge (Digite \"sim\" or \"não\").                                      Para       então a sequência converge para .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=pretext-sequencia\/problem10.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=pretext-sequencia\/problem10.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=pretext-sequencia\/problem10.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=pretext-sequencia\/problem10.pg     "
},
{
  "id": "p-4",
  "level": "2",
  "url": "section-1.html#p-4",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "sequências "
},
{
  "id": "p-5",
  "level": "2",
  "url": "section-1.html#p-5",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "sequências "
},
{
  "id": "def_SRsequence",
  "level": "2",
  "url": "section-1.html#def_SRsequence",
  "type": "Definição",
  "number": "1.1",
  "title": "",
  "body": "  Uma sequência é uma lista de infinitos números com uma ordem específica. Denotaremos uma sequência numérica por    "
},
{
  "id": "eg_SRsequence",
  "level": "2",
  "url": "section-1.html#eg_SRsequence",
  "type": "Exemplo",
  "number": "1.2",
  "title": "Três sequências e mais uma.",
  "body": " Três sequências e mais uma  Aqui estão três sequências. Muitas vezes não existe uma fórmula simples e explícita para o -ésimo termo de uma sequência. Por exemplo, os dígitos decimais de formam uma sequência porém não existe uma fórmula simples para o -ésimo dígito.  "
},
{
  "id": "p-9",
  "level": "2",
  "url": "section-1.html#p-9",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "converge "
},
{
  "id": "def_SRsequenceLimit",
  "level": "2",
  "url": "section-1.html#def_SRsequenceLimit",
  "type": "Definição",
  "number": "1.3",
  "title": "",
  "body": "  Dizemos que uma sequência converge para o limite se se aproxima de quando tende ao infinito. Nesta caso, escrevemos A sequência converge se converge para algum limite. Caso contrário, dizemos que a sequência diverge .   "
},
{
  "id": "eg_SRsequenceLimA",
  "level": "2",
  "url": "section-1.html#eg_SRsequenceLimA",
  "type": "Exemplo",
  "number": "1.4",
  "title": "Convergência no Exemplo 1.2.",
  "body": " Convergência no   Estude a convergência das sequências a seguir:       A sequência diverge pois cresce sem limitações, em vez de se aproximar de algum valor finito, quando tende ao infinto.        A sequência diverge pois oscila entre e quando tende ao infinito.    A sequência dos dígitos decimais de .   A sequência dos dígitos decimais de também diverge, embora a prova esteja fora do escorpo deste texto. Se os dígitos de convergissem, então teria que ser um número racional. A irracionalidade de (que não pode ser escrito como uma fração) foi provada pela primeira vez por Lambert em 1761. A prova de Niven (1947) é mais acessível e convidamos o leitor interessado a usar seu mecanismo de busca favorito para encontrar guias passo a passo para essa prova. .        Com tendendo para o infinito, tende para zero. Então    "
},
{
  "id": "eg_SRsequenceLimB",
  "level": "2",
  "url": "section-1.html#eg_SRsequenceLimB",
  "type": "Exemplo",
  "number": "1.5",
  "title": "<span class=\"process-math\">\\(\\displaystyle\\lim\\limits_{n\\rightarrow\\infty}\\frac{n}{2n+1}\\)<\/span>.",
  "body": "    Aqui está um exemplo um pouco menos trivial. Para estudar o comportamento de quando . Reescrevendo a expressão obtemos: Quando , o denominador tende a zero, de modo que o denominador tende para e tende para . Então   "
},
{
  "id": "thm_SRxlimtoanlim",
  "level": "2",
  "url": "section-1.html#thm_SRxlimtoanlim",
  "type": "Teorema",
  "number": "1.6",
  "title": "",
  "body": "  Se e se para todos os inteiros positivos , então    "
},
{
  "id": "eg_SRsequenceLimC",
  "level": "2",
  "url": "section-1.html#eg_SRsequenceLimC",
  "type": "Exemplo",
  "number": "1.7",
  "title": "<span class=\"process-math\">\\(\\lim\\limits_{n\\rightarrow\\infty}e^{-n}\\)<\/span>.",
  "body": "    Seja . Então e   "
},
{
  "id": "thm_SRlimarith",
  "level": "2",
  "url": "section-1.html#thm_SRlimarith",
  "type": "Teorema",
  "number": "1.8",
  "title": "Aritmética dos limites.",
  "body": " Aritmética dos limites   Sejam , e números reais e sejam as duas sequências e convergindo para e respectivamente. Ou seja, suponha que Então os seguintes limites são verdadeiros.      (O limite da soma é a soma dos limites.)       (O limite da diferença é a diferença dos limites.)   .      (O limite do produto é o produto dos limites.)    Se então   (O limite do quociente é o quociente dos limites desde que o limite do denominador não seja zero.)      "
},
{
  "id": "eg_SRlimarith",
  "level": "2",
  "url": "section-1.html#eg_SRlimarith",
  "type": "Exemplo",
  "number": "1.9",
  "title": "Aritmética dos limites.",
  "body": " Aritmética dos limites  Combinando e ,   "
},
{
  "id": "thm_SRsqueeze",
  "level": "2",
  "url": "section-1.html#thm_SRsqueeze",
  "type": "Teorema",
  "number": "1.10",
  "title": "Teorema do Confronto.",
  "body": " Teorema do Confronto   Se para todos os números naturais , e se então    "
},
{
  "id": "eg_SRsqueeze",
  "level": "2",
  "url": "section-1.html#eg_SRsqueeze",
  "type": "Exemplo",
  "number": "1.11",
  "title": "Usando o Teorema do Confronto.",
  "body": " Usando o Teorema do Confronto  Determine , no qual é o -ésimo digito decimal de . Ou seja,   Não temos uma fórmula simples para . Mas nós sabemos que e também sabemos que Então o teorema do confronto com , , e fornece   "
},
{
  "id": "thm_SRcontfn",
  "level": "2",
  "url": "section-1.html#thm_SRcontfn",
  "type": "Teorema",
  "number": "1.12",
  "title": "Limite de uma função contínua.",
  "body": " Limite de uma função contínua   Se e se a função é contínua em , então    "
},
{
  "id": "eg_SRsequenceLimD",
  "level": "2",
  "url": "section-1.html#eg_SRsequenceLimD",
  "type": "Exemplo",
  "number": "1.13",
  "title": "<span class=\"process-math\">\\(\\lim\\limits_{n\\rightarrow\\infty}\\sin\\frac{\\pi n}{2n+1}\\)<\/span>.",
  "body": "    Escreva com . Vimos, no que Já que é contínua e que , é o limite de , temos   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-1.html#exercise-1",
  "type": "Exercício",
  "number": "1.3.1",
  "title": "",
  "body": "  Determine o limite da sequência ou mostre que a sequência diverge usando as regras do limite ou teoremas apropriados. Se a sequência divergir, digite DIV como sua resposta.          Nós temos , na qual . Assim,     http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=pretext-sequencia\/problem1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=pretext-sequencia\/problem1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=pretext-sequencia\/problem1.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=1&sourceFilePath=pretext-sequencia\/problem1.pg   "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-1.html#exercise-2",
  "type": "Exercício",
  "number": "1.3.2",
  "title": "",
  "body": "  Sequência definida por uma função (Theorem 1.6.)  Seja uma função definida em para alguma constante . Se existe, então a sequência , definida para , converge e  Use a afirmação acima para determinar o limite da sequência ou digite DIV se a sequência divergir.           Temos no qual . Assim,    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=pretext-sequencia\/problem2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=pretext-sequencia\/problem2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=pretext-sequencia\/problem2.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=2&sourceFilePath=pretext-sequencia\/problem2.pg   "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-1.html#exercise-3",
  "type": "Exercício",
  "number": "1.3.3",
  "title": "",
  "body": "  Determine o limite da sequência ou mostre que a sequência diverge usando as regras do limite ou teoremas apropriados. Se a sequência divergir, digite DIV como sua resposta.          Do fato da função ser contínua segue que     http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=pretext-sequencia\/problem3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=pretext-sequencia\/problem3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=pretext-sequencia\/problem3.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=3&sourceFilePath=pretext-sequencia\/problem3.pg   "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-1.html#exercise-4",
  "type": "Exercício",
  "number": "1.3.4",
  "title": "",
  "body": "  Seja . Encontre o menor número tal que :  (a)  para   (b)  para   (c) Agora use a definição de limite para provar que . Ou seja, encontre o menor valor de (em termos de ) tal que para todo .  (Observe que estamos usando em vez de na definição para permitir que você insira sua resposta mais facilmente).  Digite sua resposta em função de ).                  Temos Portanto, forneceu , ou seja, . Segue-se que podemos tomar .  Pela parte (a), forneceu , ou seja, . Segue-se que podemos tomar .  Usando a parte (a), sabemos que forneceu . Assim, para completar a prova, seja e faça . Então, para , obtemos    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=pretext-sequencia\/problem4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=pretext-sequencia\/problem4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=pretext-sequencia\/problem4.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=4&sourceFilePath=pretext-sequencia\/problem4.pg   "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "section-1.html#exercise-5",
  "type": "Exercício",
  "number": "1.3.5",
  "title": "",
  "body": "  Determine se a sequência converge ou diverge. Se convergir, encontre o limite.  Observe,  Converge (sim\/não):  Limite:    sim         http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=pretext-sequencia\/problem5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=pretext-sequencia\/problem5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=pretext-sequencia\/problem5.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=5&sourceFilePath=pretext-sequencia\/problem5.pg   "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-1.html#exercise-6",
  "type": "Exercício",
  "number": "1.3.6",
  "title": "",
  "body": "  Determine se a sequência é divergente ou convergente. Se for convergente, avalie seu limite.  (Se divergir para o infinito, indique sua resposta como inf . Se divergir para infinito negativo, indique sua resposta como -inf . Se diverge sem ser infinito ou infinito negativo, responda como div )   Resposta:         http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=pretext-sequencia\/problem6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=pretext-sequencia\/problem6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=pretext-sequencia\/problem6.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=6&sourceFilePath=pretext-sequencia\/problem6.pg   "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-1.html#exercise-7",
  "type": "Exercício",
  "number": "1.3.7",
  "title": "",
  "body": "  Escreva os cinco primeiros termos da sequência com, , determine se a sequência converge e, em caso afirmativo, encontre seu limite.  Enter the following information for .              (Digite DNE se o limite não existir.)  A sequência converge (Digite \"sim\" ou \"não\").                                      Para       , então a sequência converge para .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=pretext-sequencia\/problem7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=pretext-sequencia\/problem7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=pretext-sequencia\/problem7.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=7&sourceFilePath=pretext-sequencia\/problem7.pg   "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "section-1.html#exercise-8",
  "type": "Exercício",
  "number": "1.3.8",
  "title": "",
  "body": "  Escreva os cinco primeiros termos da sequência ,determine se a sequência converge e, em caso afirmativo, encontre seu limite.  Insira as seguintes informações para .              (Digite DNE se o limite não existir.)  A sequência converge (Digite \"sim\" ou \"não\").                                      Para       então a sequência converge para .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=pretext-sequencia\/problem8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=pretext-sequencia\/problem8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=pretext-sequencia\/problem8.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=8&sourceFilePath=pretext-sequencia\/problem8.pg   "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "section-1.html#exercise-9",
  "type": "Exercício",
  "number": "1.3.9",
  "title": "",
  "body": "  Escreva os primeiros cinco termos da sequência com , determine se a sequência converge e, em caso afirmativo, encontre seu limite.  Insira as seguintes informações para .              (Digite DNE se o limite não existir.)  A sequência converge (Digite \"sim\" ou \"não\").                                      Para       , então a sequência converge para .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=pretext-sequencia\/problem9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=pretext-sequencia\/problem9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=pretext-sequencia\/problem9.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=9&sourceFilePath=pretext-sequencia\/problem9.pg   "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "section-1.html#exercise-10",
  "type": "Exercício",
  "number": "1.3.10",
  "title": "",
  "body": "  Escreva os primeiros cinco termos da sequência com, , determine se a sequência converge e, em caso afirmativo, encontre seu limite.  Insira as seguintes informações para .              (Digite DNE se o limite não existir.)  A sequência converge (Digite \"sim\" or \"não\").                                      Para       então a sequência converge para .    http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=pretext-sequencia\/problem10.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=pretext-sequencia\/problem10.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=pretext-sequencia\/problem10.pg  http:\/\/191.252.191.150\/webwork2\/html2xml?courseID=anonymous&userID=anonymous&password=anonymous&course_password=anonymous&answersSubmitted=0&displayMode=MathJax&outputformat=simple&language=pt-BR&problemSeed=10&sourceFilePath=pretext-sequencia\/problem10.pg   "
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
