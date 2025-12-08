function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center items-center">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
        <input type="text" placeholder="Name" className="input" required />
        <input type="email" placeholder="Email" className="input" required />
        <textarea placeholder="Message" className="input h-32" required></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 mt-4 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
