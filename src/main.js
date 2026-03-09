const strip = document.querySelector(".memory-strip")

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      strip.classList.add("is-visible")
    }
  })
}, { threshold: 0.3 })

observer.observe(strip)