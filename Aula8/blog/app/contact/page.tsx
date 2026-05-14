import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Entre em Contato</h1>
      <p className="text-lg mb-6 text-center text-gray-700">
        Se tiver dúvida, manda ai
      </p>
      <ContactForm />
    </div>
  );
}