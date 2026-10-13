# Produtos · SEO, Analytics e testes

Catálogo em Next.js e TypeScript com Fake Store API, Google Analytics 4 e testes.

Experimento de integração entre apresentação, dados, metadados e medição. Utiliza Tailwind, Jest e Testing Library.

## Destaques

- Consulta e apresentação de produtos.
- Analytics configurado por variável de ambiente.
- Testes unitários e de integração.
- Metadados e preload de imagem.

<details>
<summary><strong>Organização e código</strong></summary>

### Por dentro do código

| Código | O que observar |
| --- | --- |
| [`app/service/api-service.ts`](app/service/api-service.ts) | Busca de produtos. |
| [`app/lib/analytics.ts`](app/lib/analytics.ts) | Inicialização e pageview. |
| [`app/layout.tsx`](app/layout.tsx) | Layout e metadados. |
| [`app/__tests__/integration/HomePageIntegration.test.tsx`](app/__tests__/integration/HomePageIntegration.test.tsx) | Teste de integração. |

</details>

<details>
<summary><strong>Executar e consultar</strong></summary>

### Executar localmente

Requer Node.js e npm compatíveis com as dependências versionadas.

```bash
git clone https://github.com/Will-Ifes/apply-seo-and-google-analytic.git
cd apply-seo-and-google-analytic
npm install
npm run dev
```

Abra o endereço informado pelo servidor no terminal.

Para medir navegação, configure `NEXT_PUBLIC_GA_ID` em `.env.local` com a sua propriedade de testes.

### Comandos disponíveis

| Comando | Script versionado |
| --- | --- |
| `npm run dev` | `next dev` |
| `npm run build` | `next build` |
| `npm start` | `next start` |
| `npm run lint` | `next lint` |
| `npm test` | `jest` |

</details>

<details>
<summary>Escopo e referências</summary>

Os metadados ainda têm textos genéricos. A configuração não comprova indexação ou ganho de tráfego. Revisar metadados por página, consentimento e carregamento são próximos passos.

</details>

---

Mantido por **Will Oliveira** · [Perfil](https://github.com/Will-Ifes) · [LinkedIn](https://www.linkedin.com/in/wildemberg-de-jesus-oliveira/)
