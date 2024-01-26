const messageGenerator = {
    // Arrays of different pieces of data
    quotes: [
      'Believe you can and you\'re halfway there.',
      'The only way to do great work is to love what you do.',
      'Success is not final, failure is not fatal: It is the courage to continue that counts.',
      // Add more quotes as needed
    ],
  
    themes: [
      'Persistence',
      'Passion',
      'Optimism',
      'Hard Work',
      // Add more themes as needed
    ],
  
    authors: [
      'Theodore Roosevelt',
      'Steve Jobs',
      'Winston Churchill',
      // Add more authors as needed
    ],
  
    // Function to generate a random message
    generateMessage: function () {
      const randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
      const randomTheme = this.themes[Math.floor(Math.random() * this.themes.length)];
      const randomAuthor = this.authors[Math.floor(Math.random() * this.authors.length)];
  
      // Construct the message
      const message = `"${randomQuote}"\n- ${randomAuthor}, ${randomTheme}`;
  
      return message;
    },
  };
  
  function generateMessage() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = messageGenerator.generateMessage();
  }
  
  // Initial message on page load
  generateMessage();