# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

A estruturação de um site em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação segue uma abordagem organizada e separada por pastas. Os diferentes componentes do site, como HTML, imagens, JavaScript (JS) e CSS, são agrupados em diretórios específicos para facilitar a manutenção e a organização do projeto.




## Diagrama de componentes

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

Exemplo: 

Os componentes que fazem parte da solução são apresentados na Figura XX.

![Diagrama de Componentes](img/componentes.png)
<center>Figura XX - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Canais** - seções de notícias apresentadas 
     - **Comentários** - registro de opiniões dos usuários sobre as notícias
     - **Preferidas** - lista de notícias mantidas para leitura e acesso posterior
 - **News API** - plataforma que permite o acesso às notícias exibidas no site.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

> **Links Úteis**:
>
> - [Whimsical](https://whimsical.com/)

<p>A imagem a seguir ilustra o fluxo do usuário em nossa solução. Assim que o usuário entra no site, ele é apresentado à tela inicial (Tela 1)  onde tem as opções Espaço do Usuário (Janela Suspensa), O que oferecemos, Quem somos, Cadastro, Login e Frases de apoio.</p>
<p>Caso ele opte por seguir pelo Espaço do Usuário, ele será redirecionado para a tela de Login (Tela 3), onde poderá realizar login para acessar o espaço, mas caso não tenha cadastro ainda tem a opção Cadastre-se na tela de Login que será redirecionado para a tela de cadastro (Tela 2).Assim que realizar o cadastro vai ser redirecionado para a tela de Login, onde poderá realizar o login e ter acesso ao Espaço do Usuário.</p>

<p>Assim que  entrar no Espaço do Usuário (Tela 4)  vai ter algumas opções, como: janela suspensa com as opções do espaço do usuário, Artigos, Botão de auto ajuda e mensagem de “Bem-vindo, Usuário”.</p>

<p>Ao selecionar “Agende sua consulta” será redirecionado para a tela de agendamento (Tela 6), onde seleciona a data, hora e o profissional desejados para a consulta a partir das opções disponíveis e clique em “Agendar”, que será redirecionado para a tela com as instruções para realização da consulta (Tela 7). </p>

<p>Ao confirmar a consulta (Tela 7) ou indo em “Meus agendamentos” (Tela 4) e confirmando a consulta será redirecionado para a tela de avaliação (Tela 8), onde poderá avaliar a consulta.</p>


<p>Na tela Espaço do Usuário (Tela 4) tem a opção Editar perfil, onde será redirecionado para uma tela (Tela 5) onde consegue inserir e alterar informações do usuário.</p>

<p>Nas telas  Espaço do Usuário (Tela 4), Agende sua consulta (Tela 6), Meus agendamentos (Tela 7) e na Avaliação (Tela 8) aparece as opções Artigos (Tela 9), onde tem alguns artigos sobre saúde mental e ansiedade, e Ícone para a tela de auto ajuda (Tela 10) onde tem alguns vídeos de meditação, yoga e alguns textos mindfulness.</p>






<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t5-Mentally/blob/e5fe91b4fcdc573a71cf234ea42c1e13269b5cf3/docs/img/diagrama.png" alt="">



## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.


## Hospedagem

Segue o link da hospedagem: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t5-Mentally/src/mentally/
