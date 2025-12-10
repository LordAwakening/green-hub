// Contact form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if(!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();

    if(!name || !email || !message){
      alert("Please fill in all fields!");
      return;
    }

    alert(`Thanks ${name}, your message has been sent!`);
    form.reset();
  });

  // Animate sections on scroll
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    section.style.animationPlayState = 'paused';
    observer.observe(section);
  });
});
