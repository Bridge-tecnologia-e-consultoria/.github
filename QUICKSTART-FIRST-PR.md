# QUICKSTART-FIRST-PR.md

## 📚 Objetivo
Ajudar qualquer pessoa a sair do zero e abrir o primeiro pull request no framework sem perder tempo com adivinhação.

## 🎯 Tópicos Cobertos
- Setup local
- Commit e push
- Abertura de PR
- Tempo de resposta esperado
- Problemas comuns

## 📖 Seções Principais
### Setup local
1. Faça clone do repositório relevante.
2. Sincronize com a branch base correta.
3. Crie uma branch descritiva, por exemplo `docs/first-pr-guide`.
4. Revise o escopo antes de editar para evitar mudanças fora do objetivo.

### Commit & Push
Use commits pequenos e claros. Exemplo:

```bash
git checkout -b docs/first-pr-guide
git add README.md QUICKSTART-FIRST-PR.md
git commit -m "docs(quickstart): add first pr guide"
git push origin docs/first-pr-guide
```

### Abrir PR
No GitHub, abra um pull request com título objetivo, descrição curta do contexto, o que mudou e como validar. Confirme se CODEOWNERS acionou os reviewers certos e se todos os checks começaram.

### Response time esperado
- PR pequeno e claro: review inicial no mesmo dia útil
- Ajustes em docs/processo: normalmente rápido
- Mudanças em segurança, workflow ou deploy: podem exigir review adicional

### Common issues & fixes
- **Check não iniciou:** confirme branch base e arquivo alterado.
- **Reviewer errado:** consulte `.github/CODEOWNERS`.
- **Build falhou:** abra os logs e siga o [QUICKSTART-TROUBLESHOOTING.md](./QUICKSTART-TROUBLESHOOTING.md).
- **Secret scanning bloqueou:** remova o conteúdo e siga o [QUICKSTART-SECURITY-INCIDENT.md](./QUICKSTART-SECURITY-INCIDENT.md).

## 💡 Exemplos Práticos
```yaml
first_pr:
  title: "docs: add quick start for first PR"
  validation:
    - "Review manual do markdown"
    - "Verificar links"
    - "Confirmar reviewers corretos"
```

## ❓ FAQ
**Q: Preciso abrir issue antes do PR?**  
A: Só quando o trabalho ainda precisar de refinamento ou alinhamento.

**Q: Posso mandar PR grande no primeiro dia?**  
A: Melhor começar com mudança pequena para validar o fluxo.

## 🔗 Recursos Adicionais
- [TRAINING-03-CONTRIBUTING.md](./TRAINING-03-CONTRIBUTING.md)
- [TRAINING-01-GOVERNANCE.md](./TRAINING-01-GOVERNANCE.md)
- [DOCUMENTATION-SETUP.md](./DOCUMENTATION-SETUP.md)

## 🆘 Ajuda & Suporte
Se travar no fluxo de PR, mencione `@leads` com link do branch, do PR e do erro encontrado.

