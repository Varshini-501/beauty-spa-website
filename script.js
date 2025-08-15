function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  }

  function closeMenu() {
    document.getElementById('nav-menu').classList.remove('active');
    document.getElementById('hamburger').classList.remove('active');
  }


const modal = document.getElementById('loginModal');
    const formTitle = document.getElementById('formTitle');
    const userInput = document.getElementById('userInput');
    const passInput = document.getElementById('passInput');
    const switchLink = document.querySelector('.switch-link');
    const button = document.querySelector('.modal-content button');

    let isLogin = true;

    function openModal() {
      modal.style.display = 'block';
    }

    function closeModal() {
      modal.style.display = 'none';
    }

    function toggleForm() {
      isLogin = !isLogin;
      formTitle.textContent = isLogin ? 'Login' : 'Sign Up';
      passInput.placeholder = isLogin ? 'Password' : 'Create Password';
      button.textContent = isLogin ? 'Login' : 'Sign Up';
      switchLink.textContent = isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login";
    }

    function submitForm() {
      alert(isLogin ? 'Logging in...' : 'Signing up...');
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}
// FAQ 
const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.parentElement.nextElementSibling;
    const isOpen = answer.style.display === 'block';

    // Close all answers first
    document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.textContent = '+');

    if (!isOpen) {
      answer.style.display = 'block';
      button.textContent = '–';
    } else {
      answer.style.display = 'none';
      button.textContent = '+';
    }
  });
});
