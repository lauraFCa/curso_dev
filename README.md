# curso.dev

Seguindo o [curso.dev](https://curso.dev/) do Deschamps

1. [Conceitos](#conceitos)  
   1.1 [Protocolos](#protocolos)  
   1.2 [Next](#next)  
   1.3 [Git](#git)  
   1.4 [DNS](#dns)
2. [Projeto](#projeto)

<br/>

# Conceitos

## Protocolos:

- **HTTP**: Hypertext Transfer protocol - Protocolo com regras para transferencias de documentos com referências para outros documentos
- **FTP**: File Transfer Protocol - protocolo para transferencia de arquivos
- **SMTP**: Simple Mail Transfer Protocol - para transferência de mensagens de e-mail
- **IP**: Internet Protocol

**UDP vs TCP**

- **UDP**: User Datagram Protocol - cada pacote enviado é auto-suficiente, e não precisa de conferência (não possui o _Error Recovery_)
- **TCP**: Possui o _Error Recovery_, que torna mais lento

Protocolos podem ser aplicados um sobre o outro:

1. HTTP
2. TCP
3. IP

## Next

FBR - File Based Router: Roteamento baseado em arquivos

Nome do arquivo vira o nome da rota:

```plaintext
pages
   |- produtos
   |  |- index.js         ---- site.com/produtos
   |  |- camisas.js       ---- site.com/produtos/camisas
   |- index.js            ---- site.com
   |- recuperar-senha.js  ---- site.com/recuperar-senha
   |- sobre.js            ---- site.com/sobre
```

OBS: Sair do programa de coleta de dados anonimos  
`npx next telemetry disable`

## GIT

- Verionsamentos anteriores: Guardavam apenas os `diffs` das versões
- GIT: Guarda toda as versões, e caso não haja mudança no arquivo, aponta ele para o arquivo da versão anterior.  
   Calcula o `diff` sob demanda - por isso é mais rápido.

States dos arquivos do GIT:

- Untracked
- Unstaged
- Staged
- Commited

Commits são imutávels - quando eu edito, ele cria um novo.

Alguns comandos para lembrar:

```git
git add <filename>
git commit
git commit --amend
git log --stat
git log --oneline
```

## DNS

Domain Name System: Converte endereço de domínio no endereço de IP

1. _Computador_ --- `tabnews.com.br` ---> _Sevidor DNS_
2. _Sevidor DNS_ --- `103.88.235.34` ----> _Computador_
3. _Computador_ --- `103.88.235.34` ----> _Servidor final_

### Como descobrir o IP

_Computador_ envia domínio para o _Provedor de internet_ que possui um _Recursive Resolver_.  
O recursive resolver é quem descobre o IP.

Root Server são os recursive resolvers

> Atualmente são 13 root servers, em mais de mil instâncias espalhadas pelo mundo

`Fully Qualified Domain Name`: Nome de domínio real completo (termina com um `.`)

```txt
tabnews.com.br.
         |  | |
         |  | root domain
         |  TLD - Top Level Domain
         |
```

Lista de TLS: `.br`, `.com`, `.org`, `.eu`, etc...  
 Separada duas categorias:

- ccTLDs: Country Code Top-Level Domains `.ca`, `.pt`, `.br`
- gTLDs: Generic Top Level Domains `.com`, `.org`, `.dev`, `.bradesco`

> Bradesco comprou com a ICANN (Internet Coporation for Assigned Names and Numbers) o TLS `.bradesco`

**Fluxo para encontrar o IP:**

1. Provedor de internet ---`tabnews.com.br`---> Root Server
2. Root Server -------------`br`---> Provedor de internet
3. Provedor de internet ---`tabnews.com.br`---> TLD `.br`
4. TLD _.br_ ------------------`IP do Authoritative Server`-----> Provedor de Internet
5. Provedor de Internet ---`tabnews.com.br`--> Authoritative Server
6. Authoritative Server ----`IP Final`---> Provedor de Internet

\*Authoritative _Name_ Server

Para agilizar é usado o `TTL` - Time to Live:  
Define quanto tempo o registro fica em cache, que pode ser aplicado em todos os servidores.

_NIC.br_: Núcleo de Informaçao e Coordenação do `.br`

- Órgão que gerencia os registros `.br`
- Quem adiciona o domínio ao `TLS .br`

[DNS Propagation Checker](https://www.whatsmydns.net/)  
(consultar registro específico - `NS`)

### Subdomínios

Os subdomínios são a parte que vem antes do domínio principal na estrutura da URL, como **_subdominio.dominio.com_**.  
Servem para organizar domínios, como: `blog.seusite.com` e `loja.seusite.com`

Casos de uso de subdomínios:

- **Ambientes de teste** - Você pode usar um subdomínio como um ambiente de teste para experimentar novos recursos sem afetar o site principal (importante restringir o acesso ao subdomínio para que ele não fique acessível publicamente).
- **Sites multilíngues** - `br.seusite.com` ou `es.website.com`. Dessa forma, você não precisa comprar outro domínio de nível superior (TLD) com código de país.
- **Versão para celular** - É possível criar um site específico para usuários móveis com um subdomínio, como `m.seusite.com`.

Tecnicamente, `www` é o subdomínio mais comum em um nome de domínio totalmente qualificado.

### dig

Ferramenta especializada para fazer requests em servidores DNS.  
(útil para )

```bash
sudo apt update
sudo apt install dnsutils
```

```bash
dig fintab.com.br  # Retorna servidor da Versel mais próximo do usuário:
dig fintab.com.br TXT +trace  # Retorna o registro TXT com todos os steps/servidores para chegar nele (passo a passo)
```

## Service Level Agreement - SLA

Tempo que o serviço vai estar no ar.

Importante consultar as páginas de status das plataformas.  
Exemplos:

- Vercel: https://www.vercel-status.com/
- AWS: https://health.aws.amazon.com/health/status
- GitHub: https://www.githubstatus.com/

<br/>

## API - Application Programming Interface

Tende a mudar menos que uma interface web
Pode ter *breaking changes* ou *non breaking changes*.
- *Breaking changes* são aquelas que não mantém compatibilidade com a versão anterior (*backward compatibility*)
- *Non breaking changes* mantém a compatibilidade



# Projeto

## Criar Milestones

Milestones (e issues) ajudam a visualizar o progresso e motivar a continuidade do desenvolvimento.

## Ideia McDonals

Para evitar a estagnação, e falta de colaboração/ideias.  
Como fazer: Dê uma sugestão simples ou mesmo improvavél/impossível - isso irá gerar uma discussão

## POC vs MVC

1. PoC: Proof of Concept  
   Permite compreender o que pode ser feito para provar um conceito, de forma rápida e barata.  
   _Encontre formas baratas para provar que o que você acredita está certo ..._

- MVP: Minimum Viable Product  
  Fazer o mínimo possível do produto  
  _... e então faça o mínimo que der_
