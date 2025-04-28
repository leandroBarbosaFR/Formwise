import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Puis-je gérer plusieurs élèves avec votre plateforme ?',
      answer:
        'Oui, vous pouvez facilement gérer et suivre l’inscription de plusieurs élèves en même temps, ce qui permet de garder toutes vos informations bien organisées.',
    },
    {
      question:
        'Est-il possible de mettre à jour les informations d’un élève après l’inscription ?',
      answer:
        'Absolument, vous pouvez mettre à jour les informations des élèves à tout moment pour vous assurer que vos dossiers sont toujours à jour.',
    },
    {
      question:
        'Les parents peuvent-ils accéder aux détails de l’inscription de leurs enfants ?',
      answer:
        'Oui, les parents peuvent accéder en toute sécurité aux informations d’inscription de leurs enfants via leur tableau de bord personnel.',
    },
  ],
  [
    {
      question:
        'Que faire si je rencontre des problèmes techniques pendant l’inscription ?',
      answer:
        'Notre équipe d’assistance est là pour vous aider ! Vous pouvez nous contacter par email, et nous vous aiderons rapidement à résoudre tout problème.',
    },
    {
      question:
        'Est-ce que la plateforme permet de gérer les paiements des inscriptions ?',
      answer:
        'Oui, vous pouvez facilement gérer les paiements des inscriptions des élèves via notre plateforme, y compris les paiements en ligne et par virement.',
    },
    {
      question: 'Puis-je personnaliser les formulaires d’inscription ?',
      answer:
        'Oui, vous pouvez personnaliser les formulaires d’inscription selon vos besoins, en ajoutant des champs spécifiques pour collecter toutes les informations nécessaires.',
    },
  ],
  [
    {
      question: 'Comment suivre l’état des inscriptions de mes élèves ?',
      answer:
        'Vous pouvez suivre l’état de toutes les inscriptions des élèves directement depuis votre tableau de bord administrateur, en temps réel.',
    },
    {
      question: 'Les enseignants ont-ils un accès pour gérer leurs élèves ?',
      answer:
        'Oui, vous pouvez accorder un accès spécifique aux enseignants pour qu’ils puissent suivre les informations des élèves et gérer leurs emplois du temps.',
    },
    {
      question:
        'Puis-je exporter les données des inscriptions pour des rapports ?',
      answer:
        'Oui, vous pouvez facilement exporter les données des inscriptions en format Excel ou CSV pour générer des rapports détaillés.',
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
            Questions fréquentes
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Si vous ne trouvez pas ce que vous cherchez, contactez notre équipe
            de support et, si vous avez de la chance, quelqu&apos;un reviendra
            vers vous.
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
