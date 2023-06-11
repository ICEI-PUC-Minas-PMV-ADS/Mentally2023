# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>



<table border="2" width="100%">
<tr>
    <td>Caso de Teste </td>
    <td> Janela suspesa como atalhos para usuário </td>
</tr>

<tr>
    <td>Requisitos Associados</td>
    <td> RF-03 </td>
</tr>

<tr>
    <td>Objetivo do teste</td>
    <td> Verificar se todas as janelas suspensas estão aparecendo e se estão redirecionando as páginas. </td>
</tr>

<tr>
    <td>Passos</td>
    <td> 
 <h3>Teste 1: Janela Suspensa "Espaço do Usuário" antes do Login</h3>
<ol>
  <li>Acessar navegador</li>
  <li>Abrir site</li>
  <li>Clicar em "Espaço do Usuário" na barra de navegação</li>
  <li>Clicar em uma das opções da janela suspensa, que deverá ter aparecido</li>
  <li>Clicar nos outros itens da janela suspensa nessa página e em diferentes páginas do site, antes de realizar o login na plataforma</li>
</ol>

<h3>Teste 2: Janela Suspensa "Espaço do Usuário" após o Login</h3>
<ol>
  <li>Acessar navegador</li>
  <li>Abrir site</li>
  <li>Realizar o login no site, se necessário, realizar o cadastro antes de logar</li>
  <li>Logado, dentro da página "Espaço do Usuário", clicar em "Espaço do Usuário" na barra de navegação</li>
  <li>Clicar em uma das opções da janela suspensa, que deverá ter aparecido</li>
  <li>Clicar nos outros itens da janela suspensa, nessa página e em diferentes páginas do site, após realizar o login na plataforma, sem retornar na página inicial</li>
</ol>

<h3>Teste 3: Janela Suspensa "Bem vindo, [usuário]"</h3>
<ol>
  <li>Acessar navegador</li>
  <li>Abrir site</li>
  <li>Realizar o login no site, se necessário, realizar o cadastro antes de logar</li>
  <li>Logado, dentro da página "Espaço do Usuário", clicar em "Bem-vindo, [usuário]" na barra de navegação</li>
  <li>Clicar na 1ª das opções da janela suspensa, nessa página e em diferentes páginas do site, após realizar o login na plataforma, sem retornar na página inicial</li>
  <li>Clicar na opção "Sair" da janela suspensa no Espaço do Usuário e em diferentes páginas do site, após realizar o login na plataforma, sem retornar na página inicial</li>
</ol>
  </td>
</tr>

<tr>
   <td>Critérios de Êxito</td>
   <td>
      <p>Teste 1: Aparecer uma janela suspensa com 4 itens: "Espaço do Usuário"; "Agende sua Consulta Online"; "Confira seus agendamentos"; "Histórico de Consultas", todas redirecionando para a página de "LOGIN".</p>
      <p>Teste 2: Aparecer uma janela suspensa com 4 itens: "Espaço do Usuário"; "Agende sua Consulta Online"; "Confira seus agendamentos"; "Histórico de Consultas", todas redirecionando para suas respectivas páginas.</p>
      <p>Teste 3: Aparecer uma janela suspensa com 2 itens: "Alterar Perfil"; "Sair", ambas redirecionando para suas respectivas páginas.</p>
    </td>
</tr>
    
<tr>
     <td>Resultado do teste</td>
    <td> 
        <p>Os itens da janela suspensa redireciona para a tela login.</p>
        <p>Logado janela suspensa redireciona para as telas correspondentes.</p>
        <p>Logado janela suspensa com o nome do usuario redireciona para as telas correspondentes.</p>
    </td>
</tr>    

</table>




<table border="2" width="100%">
<tr>
    <td>Caso de Teste </td>
    <td> Realizar login </td>
</tr>

<tr>
    <td>Requisitos Associados</td>
    <td> RF-007 O site deve permitir o usuário realizar um login de acesso a todas as funcionalidades da aplicação </td>
</tr>

<tr>
    <td>Objetivo do teste</td>
    <td>Verificar se está cadastrando e realizando login no site </td>
</tr>

<tr>
    <td>Passos</td>
    <td> 
         <ol>
            <li>Acessar navegador</li>
            <li>Abrir site</li>
            <li>Visualizar a página principal ícone de cadastro e login </li>
            <li>Clicar em cadastro </li>
            <li>Realizar cadastro </li>
            <li> Realizar login </li>
        </ol>
    </td>
</tr>

<tr>
    <td>Critérios de Êxitos</td>
    <td>Tem que clicar em cadastro, realizar o cadastramento inserindo nome, login e senha, realizar o login inserindo o login e senha. </td>
</tr>
    
<tr>
     <td>Resultado do teste</td>
     <td></td>
</tr>    

</table>



<table border="2" width="100%">
<tr>
    <td>Caso de Teste </td>
    <td>Atualizar dados </td>
</tr>

<tr>
    <td>Requisitos Associados</td>
    <td>RF-011 O site deve permitir que o usuário atualize seus dados a qualquer momento (perfil)</td>
</tr>

<tr>
    <td>Objetivo do teste</td>
    <td>Verificar se está conseguindo alterar perfil </td>
</tr>

<tr>
    <td>Passos</td>
    <td> 
         <ol>
            <li>Acessar navegador</li>
            <li>Abrir site</li>
            <li> Clicar em login</li>
            <li> Realizar login </li>
            <li>Na tela Espaço do usuário clicar em Editar perfil </li>
            <li>Atualizar informação que precisa ser alterada </li>
        </ol>
    </td>
</tr>

<tr>
    <td>Critérios de Êxitos</td>
    <td>Tem que clicar em cadastro, realizar o cadastramento inserindo nome, login e senha, realizar o login inserindo o login e senha. </td>
</tr>
 
<tr>
     <td>Resultado do teste</td>
     <td></td>
</tr>

</table>




<table border="2" width="100%">
<tr>
    <td>Caso de Teste </td>
    <td>Artigos sobre saúde mental  </td>
</tr>

<tr>
    <td>Requisitos Associados</td>
    <td>RF-004 O site deve conter artigos, pesquisas e material sobre doenças mentais, métodos de autoajuda, estabilidade emocional e contatos de apoio</td>
</tr>

<tr>
    <td>Objetivo do teste</td>
    <td>Verificar se os artigos estão aparecendo para leitura </td>
</tr>

<tr>
    <td>Passos</td>
    <td> 
        <ol>
            <li>Acessar navegador</li>
            <li>Abrir site</li>
            <li>Ir para tela Espaço do usuário</li>
            <li>Clicar em Artigos </li>
            <li>Selecionar artigo que deseja ler </li>
        </ol>
    </td>
</tr>

<tr>
    <td>Critérios de Êxitos</td>
    <td>Abrir artigos para leitura. </td>
</tr>
    
<tr>
     <td>Resultado do teste</td>
     <td></td>
</tr>
</table>






<table border="2" width="100%">
<tr>
    <td>Caso de Teste </td>
    <td> Agendar consultas </td>
</tr>

<tr>
    <td>Requisitos Associados</td>
    <td>RF-001 O site tem que conseguir agendar e programar encontros com profissionais da área da psicologia </td>
</tr>

<tr>
    <td>Objetivo do teste</td>
    <td> Agendar a consulta com a data, hora e nome do profissional na página de agendamentos </td>
</tr>

<tr>
    <td>Passos</td>
    <td> 
        <ol>
            <li>Acessar navegador</li>
            <li>Abrir site</li>
            <li>Realizar login </li>
            <li>Clicar no botão de agendar a consulta </li>
            <li>Selecionar a data, hora e profissional  </li>
            <li>Conferir se agendou na página que será direcionada chamada “agendados”   </li>
        </ol>
    </td>
</tr>

<tr>
    <td>Critérios de Êxitos</td>
    <td>
    <p> TESTE 1:  A consulta só pode ser marcada entre as 9:00 am as 17:00 pm. </p>
    <p> TESTE 2: Tem que aparecer as informações de data, hora e profissional selecionadas nos agendamentos. </p>  
    </td>
</tr>
    
<tr>
     <td>Resultado do teste</td>
     <td>
        <p> Consulta não é agendada antes das 09:00 ou depois das 17:00.</p>
         <p> Depois de agendado aparece na tela a data, hora e profissional.</p>
    </td>
</tr>
    
</table>







<table border="2" width="100%">
<tr>
    <td>Caso de Teste </td>
    <td> Histórico de consultas </td>
</tr>

<tr>
    <td>Requisitos Associados</td>
    <td>RF-012 O usuário pode acessar o histórico das consultas passadas </td>
</tr>

<tr>
    <td>Objetivo do teste</td>
    <td>Consultar o histórico de consultas </td>
</tr>

<tr>
    <td>Passos</td>
    <td> 
         <ol>
            <li>Acessar navegador</li>
            <li>Abrir site</li>
            <li>Realizar login </li>
            <li>Clicar no botão "consultas passadas" </li>
             <li>Abrir Histórico de consultas, com as consultas passadas </li>
        </ol>
    </td>
</tr>

<tr>
    <td>Critérios de Êxitos</td>
    <td>
    <p>TESTE 1: Deve ser mostrado as consultas passadas pelo usuário dentro de uma view </p>  
    </td>
</tr>
<tr>
     <td>Resultado do teste</td>
     <td></td>
</tr>
</table>





<table border="2" width="100%">
<tr>
    <td>Caso de Teste </td>
    <td> Botão de pânico </td>
</tr>

<tr>
    <td>Requisitos Associados</td>
    <td>RF-002 O site deve conter um ícone representando o “Botão de Pânico” em todas as guias </td>
</tr>

<tr>
    <td>Objetivo do teste</td>
    <td>Aparecer o botão de pânico em todas as páginas quando o usuário logar</td>
</tr>

<tr>
    <td>Passos</td>
    <td> 
         <ol>
            <li>Acessar navegador</li>
            <li>Abrir site</li>
            <li>Realizar login </li>
            <li>Botão de pânico aparecera assim que o login for concluído </li>
            <li>Em caso de pânico, selecionar o botão de pânico no canto inferior direito  </li>
        </ol>
    </td>
</tr>

<tr>
    <td>Critérios de Êxitos</td>
    <td>
    <p> TESTE 1: O botão tem que aparecer somente se estiver logado no site </p>  
    <p> TESTE 2: O botão tem que direcionar para um link de Mindfulness e vídeos de relaxamentos </p>  
    </td>
</tr>
    
<tr>
     <td>Resultado do teste</td>
     <td>
         <p> O botão de pânico só aparece quando estiver logado no site.</p>
         <p>O botão direciona para um link de Mindfulness e vídeos de relaxamentos.</p>
    </td>
</tr>
    
</table>







<table border="2" width="100%">
<tr>
    <td>Caso de Teste </td>
    <td> Avaliar atendimento </td>
</tr>

<tr>
    <td>Requisitos Associados</td>
    <td>RF-08</td>
</tr>

<tr>
    <td>Objetivo do teste</td>
    <td> Verificar quais maneiras são permitidas em enviar a avaliação da consulta. </td>
</tr>

<tr>
    <td>Passos</td>
    <td> 
         <ol>
            <li>Acessar navegador</li>
            <li>Abrir site</li>
            <li>Realizar o Login</li>
            <li>Após ter concluido um agendamento, ir em consultas passadas</li>
            <li>Teste 1: Preencha todos os parâmetros de avaliação e clique em "Enviar Avaliação"</li>
            <li>Teste 2: Preencha alguns dos parâmetros de avaliação, mas não todos e clique em "Enviar Avaliação"</li>
            <li>Teste 3: Tente enviar sem preencher nenhum dos parâmetros de avaliação clicando em "Enviar Avaliação"</li>
        </ol>
</tr>

<tr>
    <td>Critérios de Êxitos</td>
    <td> 
            <p>Teste 1: Ter enviado a avaliação.</p>
            <p>Teste 2: Não ter enviado a avaliação.</p>
            <p>Teste 3: Não ter enviado a avaliação.</p>
    </td>
</tr>
    
<tr>
     <td>Resultado do teste</td>
     <td></td>
</tr>
    
</table>






<table border="2" width="100%">
<tr>
    <td>Caso de Teste </td>
    <td> Frases de apoio na homepage </td>
</tr>

<tr>
    <td>Requisitos Associados</td>
    <td>RF-13</td>
</tr>

<tr>
    <td>Objetivo do teste</td>
    <td>Verificar se frases de apoio aparecem no site e conferir se os botões de avançar e voltar as frases estão funcionando</td>
</tr>

<tr>
    <td>Passos</td>
    <td> 
        <ol>
            <li>Acessar navegador</li>
            <li>Abrir site</li>
            <li>Teste 1: Clicar no botão em formato de seta para a direita, quantas vezes quiser. </li>
            <li>Teste 2: Clicar no botão em formato de seta para a esquerda, quantas vezes quiser. </li>
        </ol>
    </td>
</tr>

<tr>
    <td>Critérios de Êxitos</td>
    <td>
        <p>Teste 1: A frase contida acima do botão ter se alterado para uma nova frase até o ponto que volte a frase inicial<p>
        <p>Teste 2: A frase contida acima do botão ter retornado para uma frase anterior a que se alterou no teste 1.</p>
    </td>
</tr>
    
<tr>
     <td>Resultado do teste</td>
     <td></td>
</tr>
    
</table>







<table border="2" width="100%">
<tr>
    <td>Caso de Teste </td>
    <td> Nome do usuário na barra de navegação  </td>
</tr>

<tr>
    <td>Requisitos Associados</td>
    <td>RF-14</td>
</tr>

<tr>
    <td>Objetivo do teste</td>
    <td>Verificiar se após fazer login no site, o mesmo apresenta um cumprimento e o nome do usuário no menu superiror </td>
</tr>

<tr>
    <td>Passos</td>
    <td> 
        <ol>
            <li>Acessar navegador</li>
            <li>Abrir site</li>
            <li>Teste 1: Realizar login e entrar no espaço do usuário </li>
            <li>Teste 2: Acessar outras páginas dentro do espaço do usuário </li>
            <li>Teste 3: Usar o menu de navegação clicando na logomarca ou no botão "sair" contido na janelas suspensa direita. </li>
        </ol>
    </td>
</tr>

<tr>
    <td>Critérios de Êxitos</td>
    <td>
        <p>Teste 1: Conter a frase "Bem vindo, [usuario].</p>
        <p>Teste 2: A frase está contida em outras páginas, além da inicial.</p>
        <p>Teste 3: O usuário sai do site e precisa fazer novamente o login</p>
    </td>
</tr>
<tr>
     <td>Resultado do teste</td>
     <td>
         <p> Depois de logado a frase aparece em todas as telas do espaço do usuário.</p>
         <p> Depois que sair tem que realizar login novamente.</p>
    </td>
</tr>
</table>


<hr>

> <span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

>Segue um vídeo mostrando o site atual em atividade, executando os requisitos funcionais: https://drive.google.com/file/d/1WFWYU0pC5lDTKTd1g4LtuildQZUuZ26h/view?usp=sharing





















Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
