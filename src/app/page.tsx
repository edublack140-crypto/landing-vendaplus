"use client";

import { useState } from "react";
import { 
  Package, 
  Calendar, 
  Image as ImageIcon, 
  Sparkles, 
  Check, 
  ChevronRight,
  Store,
  ShoppingCart,
  TrendingUp,
  Users,
  Star,
  Mail,
  Phone,
  MessageCircle
} from "lucide-react";

export default function VendaMaisLanding() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showPlans, setShowPlans] = useState(false);

  const quizQuestions = [
    {
      id: "ramo",
      question: "Qual o seu ramo de atuação?",
      options: ["Cosméticos", "Moda e Vestuário", "Eletrônicos", "Alimentos", "Artesanato", "Outros"]
    },
    {
      id: "tipo_venda",
      question: "Você vende em loja física, online ou ambos?",
      options: ["Apenas loja física", "Apenas online", "Ambos"]
    },
    {
      id: "marketplaces",
      question: "Em quais marketplaces você vende?",
      options: ["Shopee", "Mercado Livre", "Amazon", "Instagram/Facebook", "WhatsApp", "Não vendo em marketplaces"]
    },
    {
      id: "produtos",
      question: "Quantos produtos você possui?",
      options: ["1-50 produtos", "51-200 produtos", "201-500 produtos", "Mais de 500 produtos"]
    },
    {
      id: "conteudo",
      question: "Você cria suas próprias fotos e vídeos?",
      options: ["Sim, sempre", "Às vezes", "Raramente", "Nunca"]
    },
    {
      id: "postagens",
      question: "Quantas postagens por semana você faz?",
      options: ["1-3 postagens", "4-7 postagens", "8-15 postagens", "Mais de 15 postagens"]
    }
  ];

  const handleQuizAnswer = (answer: string) => {
    setQuizAnswers({ ...quizAnswers, [quizQuestions[currentQuestion].id]: answer });
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowPlans(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setQuizAnswers({});
    setShowPlans(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Venda+
              </h1>
              <p className="text-xs text-gray-600">Alcance. Mais vendas.</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            Começar Agora
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            O app que facilita a criação, organização e publicação dos seus{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              anúncios
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Simplifique sua rotina de vendas e alcance mais clientes com ferramentas inteligentes
          </p>
          <button 
            onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            Descubra como vender mais
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Tudo que você precisa em um só lugar
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Package,
              title: "Organização Inteligente",
              description: "Gerencie produtos e estoque de forma simples e eficiente",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: Calendar,
              title: "Agendamento Automático",
              description: "Programe postagens em redes sociais e marketplaces",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: ImageIcon,
              title: "Biblioteca de Mídia",
              description: "Armazene e organize todas as suas fotos e vídeos",
              color: "from-orange-500 to-red-500"
            },
            {
              icon: Sparkles,
              title: "Sugestões Inteligentes",
              description: "Receba ideias automáticas de conteúdos para vender mais",
              color: "from-green-500 to-emerald-500"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {!showPlans ? (
              <>
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-purple-600">
                      Pergunta {currentQuestion + 1} de {quizQuestions.length}
                    </span>
                    <span className="text-sm text-gray-500">
                      {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  {quizQuestions[currentQuestion].question}
                </h3>

                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuizAnswer(option)}
                      className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-purple-600 hover:bg-purple-50 transition-all duration-300 font-medium text-gray-700 hover:text-purple-600"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Perfeito! Vamos turbinar suas vendas
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Com base nas suas respostas, o Venda+ pode aumentar suas vendas em até 300%
                </p>
                <button
                  onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                >
                  Ver Planos
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="container mx-auto px-4 py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Escolha o melhor plano para você
        </h3>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Comece a vender mais hoje mesmo
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plano Mensal */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-200 hover:border-purple-600 transition-all duration-300">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Plano Mensal</h4>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-gray-900">R$ 49</span>
                <span className="text-gray-600">/mês</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Produtos ilimitados",
                "Agendamento de postagens",
                "Biblioteca de mídia",
                "Sugestões de conteúdo",
                "Suporte por email"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-gray-900 text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              Começar Agora
            </button>
          </div>

          {/* Plano Anual */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
              Economize 40%
            </div>

            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold text-white mb-2">Plano Anual</h4>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-white">R$ 29</span>
                <span className="text-purple-100">/mês</span>
              </div>
              <p className="text-purple-100 text-sm mt-2">Cobrado R$ 348/ano</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Tudo do plano mensal",
                "Análises avançadas",
                "Suporte prioritário",
                "Treinamento exclusivo",
                "Recursos beta antecipados"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-white text-purple-600 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105">
              Começar Agora
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          O que nossos clientes dizem
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Maria Silva",
              role: "Loja de Cosméticos",
              content: "Minhas vendas triplicaram em 2 meses! O agendamento automático me economiza horas todo dia.",
              rating: 5
            },
            {
              name: "João Santos",
              role: "Vendedor no Mercado Livre",
              content: "Finalmente consigo organizar meus produtos e postar regularmente. Meu faturamento aumentou 250%!",
              rating: 5
            },
            {
              name: "Ana Costa",
              role: "Loja de Moda",
              content: "As sugestões de conteúdo são incríveis! Nunca mais fiquei sem ideias para postar.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pronto para aumentar suas vendas?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de lojistas que já estão vendendo mais com o Venda+
          </p>
          <button 
            onClick={resetQuiz}
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            Começar Gratuitamente
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Venda+</h4>
                  <p className="text-xs text-gray-400">Alcance. Mais vendas.</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                A solução completa para lojistas que querem vender mais
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Produto</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Casos de Uso</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Empresa</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contato@vendamais.com" className="hover:text-white transition-colors">
                    contato@vendamais.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+5511999999999" className="hover:text-white transition-colors">
                    (11) 99999-9999
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <a href="#" className="hover:text-white transition-colors">
                    Chat ao vivo
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Venda+. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
