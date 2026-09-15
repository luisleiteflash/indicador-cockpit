/* gerado automaticamente a partir do PowerPoint - nao editar a mao */
window.COCKPIT = {
  atualizado: "15/09/2026 10:00",
  arquivo: "B2B_RESA_Indicadores_Pipeline_08.09.26_v2.pptx",
  semana: "08/09/2026",
  titulo: "Cockpit Comercial da Semana",
  subtitulo: "Visão consolidada de oportunidades, pipeline por fase e receita vs. meta",
  tituloClientes: "Principais Clientes em Negociação",
  tituloFases: "Oportunidades por Fase",
  tituloReceita: "Receita Realizada x Meta (últimos 6 meses)",
  kpis: [
    { "valor":"207", "rotulo":"Oportunidades abertas", "nota":"+4 vs. semana anterior" },
    { "valor":"R$ 1,8 M", "rotulo":"Valor pipeline em propostas", "nota":"10 contas ativas" },
    { "valor":"91%", "rotulo":"Receita vs. meta (mês)", "nota":"R$ 7,3 M de R$ 8,0 M" },
    { "valor":"R$ 180 mil", "rotulo":"Ticket médio das propostas", "nota":"Conversão: 20,00% (meta: 30%)" }
  ],
  fases: {
    nome: "Oportunidades",
    cats: ["Prospecção", "Qualificação", "Proposta", "Negociação", "Fechamento"],
    vals: [63, 24, 10, 3, 2]
  },
  receita: {
    meses: ["mar", "abr", "mai", "jun", "jul", "ago"],
    barras: [
      { "nome":"Outras Receitas (R$ M)", "vals":[3.6, 2.4, 2.7, 3.7, 4.6, 4.2] },
      { "nome":"Casas Bahia (R$ M)", "vals":[1.4, 1.8, 2.4, 6.7, 12.2, 3.1] }
    ],
    total: [5, 4.2, 5.1, 10.4, 16.8, 7.3],
    meta: [5.1, 5.7, 6.2, 7.2, 7.4, 8]
  },
  clientes: [
    { "sigla":"PP", "nome":"PremieRpet", "fase":"FECHAMENTO", "valorTxt":"R$ 500.000", "valor":500000, "previsao":"15/09/26", "responsavel":"Rafaela Cesar", "acao":"Cliente formalizou o aceite da proposta, aguardando informações para cadastro" },
    { "sigla":"ML", "nome":"Mercado Livre", "fase":"FECHAMENTO", "valorTxt":"R$ 170.000", "valor":170000, "previsao":"Set/26", "responsavel":"Michele Barros", "acao":"Início previsto para 08/09" },
    { "sigla":"J&T", "nome":"J&T Cargo", "fase":"NEGOCIAÇÃO", "valorTxt":"R$ 300.000", "valor":300000, "previsao":"Set/26", "responsavel":"Rafaela Cesar", "acao":"Aprovação de contrato" },
    { "sigla":"AM", "nome":"Amazon", "fase":"NEGOCIAÇÃO", "valorTxt":"R$ 300.000", "valor":300000, "previsao":"Set/26", "responsavel":"Michele Barros", "acao":"Implantação operação Line Haul" },
    { "sigla":"K+N", "nome":"Kuehne + Nagel", "fase":"NEGOCIAÇÃO", "valorTxt":"R$ 130.000", "valor":130000, "previsao":"Set/26", "responsavel":"Silvana Delatorre", "acao":"Aguardando aceite da proposta e informações para cadastro" }
  ],
  totalLabel: "Total em pipeline ativo (5 contas)",
  totalValor: "R$ 1.400.000",
  totalNum: 1400000
};
