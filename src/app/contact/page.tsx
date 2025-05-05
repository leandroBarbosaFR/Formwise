'use client'

import React, { useState } from 'react'
import { Header } from '@/components/Header'
import axios from 'axios'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({
      submitting: true,
      submitted: false,
      success: false,
      message: '',
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          success: true,
          message:
            'Votre message a bien été envoyé. Nous vous répondrons rapidement.',
        })
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        setStatus({
          submitting: false,
          submitted: true,
          success: false,
          message: data.error || 'Une erreur est survenue. Veuillez réessayer.',
        })
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        message:
          'Impossible d’envoyer le message. Veuillez réessayer plus tard.',
      })
    }
  }

  return (
    <>
      {/* Hero Section */}
      <Header />

      {/* Main Content */}
      <div>
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Comment pouvons-nous vous aider ?
            </h2>
            <p className="text-lg text-gray-600">
              Notre équipe est disponible pour répondre à toutes vos questions
              concernant nos services d'inscription.
            </p>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            {status.submitted && (
              <div
                className={`mb-6 rounded-md p-4 ${status.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="info">Demande d'information</option>
                  <option value="demo">Demande de démonstration</option>
                  <option value="support">Support technique</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`w-full cursor-pointer rounded-md px-6 py-3 text-white transition-colors duration-300 ${status.submitting ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                  {status.submitting
                    ? 'Envoi en cours...'
                    : 'Envoyer le message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-blue-500 py-16">
        <div>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-white">
              Autres façons de nous contacter
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 text-center shadow-md">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  {/* Email Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Email</h3>
                <p className="text-gray-600">formwisecontact@gmail.com</p>
              </div>
              <div className="rounded-lg bg-white p-6 text-center shadow-md">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  {/* Phone Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Téléphone</h3>
                <p className="text-gray-600">+33 07 63 85 83 88</p>
              </div>
              <div className="rounded-lg bg-white p-6 text-center shadow-md">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  {/* Location Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Adresse</h3>
                <p className="text-gray-600">Marseille, France</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
