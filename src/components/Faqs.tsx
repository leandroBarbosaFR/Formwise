import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Posso gerenciar vários alunos com a sua plataforma?',
      answer:
        'Sim, você pode facilmente gerenciar e acompanhar a inscrição de vários alunos ao mesmo tempo, mantendo todas as informações bem organizadas.',
    },
    {
      question:
        'É possível atualizar as informações de um aluno após a inscrição?',
      answer:
        'Com certeza! Você pode atualizar os dados dos alunos a qualquer momento para garantir que os registros estejam sempre atualizados.',
    },
    {
      question:
        'Os pais podem acessar os detalhes da inscrição de seus filhos?',
      answer:
        'Sim, os pais têm acesso seguro às informações de inscrição dos filhos por meio de seus painéis personalizados.',
    },
  ],
  [
    {
      question:
        'O que fazer se eu tiver problemas técnicos durante a inscrição?',
      answer:
        'Nossa equipe de suporte está aqui para ajudar! Você pode nos contatar por e-mail e vamos resolver qualquer problema rapidamente.',
    },
    {
      question: 'A plataforma permite gerenciar os pagamentos das inscrições?',
      answer:
        'Sim, você pode gerenciar facilmente os pagamentos das inscrições pela plataforma, incluindo pagamentos online e por transferência bancária.',
    },
    {
      question: 'Posso personalizar os formulários de inscrição?',
      answer:
        'Sim, é possível personalizar os formulários de inscrição conforme suas necessidades, adicionando campos específicos para coletar todas as informações necessárias.',
    },
  ],
  [
    {
      question: 'Como acompanhar o status das inscrições dos meus alunos?',
      answer:
        'Você pode acompanhar o status de todas as inscrições em tempo real diretamente no seu painel administrativo.',
    },
    {
      question: 'Os professores têm acesso para gerenciar seus alunos?',
      answer:
        'Sim, você pode conceder acesso específico aos professores para que eles acompanhem as informações dos alunos e gerenciem seus horários.',
    },
    {
      question: 'Posso exportar os dados das inscrições para relatórios?',
      answer:
        'Sim, você pode exportar facilmente os dados das inscrições em formato Excel ou CSV para gerar relatórios detalhados.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Se você não encontrar o que está procurando, entre em contato com
            nossa equipe de suporte.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
