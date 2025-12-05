# curso_dev

Seguindo o [curso.dev](https://curso.dev/) do Deschamps

## Conceitos

Protocolos:
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



### Next

FBR - File Based Router: Roteamento baseado em arquivos

Nome do arquivo vira o nome da rota:
```
pages
   |- produtos
   |  |- index.js         ---- site.com/produtos
   |  |- camisas.js       ---- site.com/produtos/camisas
   |- index.js            ---- site.com
   |- recuperar-senha.js  ---- site.com/recuperar-senha
   |- sobre.js            ---- site.com/sobre
```

### GIT

- Verionsamentos anteriores: Guardavam apenas os `diffs` das versões
- GIT: Guarda toda as versões, e caso não haja mudança no arquivo, aponta ele para o arquivo da versão anterior.  
   Calcula o `diff` sob demanda - por isso é mais rápido.

States dos arquivos do GIT:
- Untracked
- Unstaged
- Staged
- Commited

Commits são imutávels - quando eu edito, ele cria um novo.