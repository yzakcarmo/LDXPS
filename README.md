# Projeto de Desenvolvimento Continuo
## Codinome LDXPS

Os requisitos são:
1. Tabela Vendedores:
    - CDVEND varchar(36) notNullable PK usar GUID
    - DSNOME varchar(50) notNullable
    - CDTAB integer notNullable
    - DTNASC date
2. Tabela Clientes:
    - CDCL varchar(36) notNullable PK usar GUID
    - DSNOME varchar(50) notNullable
    - IDTIPO char(2) notNullable default('PF')
    - CDVEND varchar(36) FK CDVEND Vendedores
    - DSLIM decimal(15,2) notNullable
3. View para tela inicial
    - Visualizar/selecionar Vendedores
    - Visualizar/selecionar Clientes do vendedor selecionado
    - Acesso das interfaces de manutenção
4. Manutenção Vendedor
    - Caso de criação
        - Campos vazios
            - Botão/Opção "Confirmar"
    - Caso de edição/alteração
        - Campos populados com os dados selecionados
            - Botão/Opção "Confirmar"
        - Botão/Opção "Excluir"
        - Botão/Opção "Criar Cliente"
5. Manutenção Cliente
    - Caso de criação
        - Campos vazios
            - Lista de vendedores
            - Botão/Opção "Confirmar"
    - Caso de edição/alteração
        - Campos populados com os dados selecionados
            - Botão/Opção "Confirmar"
        - Botão/Opção "Excluir"
        - Botão/Opção "Criar Vendedor"